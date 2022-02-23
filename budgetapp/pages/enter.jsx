import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import s from '../styles/EnterPage.module.scss'
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function EnterPage( props ) {
  const { user } = useContext(UserContext)

  return (
    <main className={s}>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body has-text-centered">
          <div className="container">

            {/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
            {/* Title & Intro with user signed IN */}
            {user && ( 
              <>
                <p className="title">
                  {/* If user.name equals null then print 'wonderfull person!', else just print the name */}
                  Hello {user?.name != null ? user?.name  : "wonderful person!"}
                </p>
                <p className="subtitle">
                  Proud Steward you are!
                </p>
                <div className="">
                  <SignOutButton />
                </div> 
              </> 
            )}


            {/* Title & Intro with user signed OUT */}
            {!user && ( 
              <>
                <p className="title">
                  Become a member!
                </p>
                <p className="subtitle">
                  Sign in or create a new account.
                </p>
                <div className="">
                  <SignInButton />
                </div> 
              </> 
            )}




          </div>
        </div>
      </section>
    </main>
  )
}

//Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    const userSignIn = await auth.signInWithPopup(googleAuthProvider);

    if(userSignIn.additionalUserInfo?.isNewUser) {
      console.log("New User Login Recognized");
      NewUserDataEntry(userSignIn.user);
    }
    else {
      console.log("Returning User Login");
    }
  };

  return (
    <button className={s.btnGoogle} onClick={signInWithGoogle}>
        <img src="/Icons/Google Icon.png" /> Sign in with Google
    </button>  
  );
}

async function NewUserDataEntry(newUser) {
  const userDoc = firestore.doc(`users/${newUser.uid}`);
  const batch = firestore.batch();
  batch.set(userDoc, { uid: newUser.uid, email: newUser.email, photoURL: newUser.photoURL, displayName: newUser.displayName });

  await batch.commit();

}



//Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}
