import 'bulma/css/bulma.min.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { auth, firestore } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';



function MyApp({ Component, pageProps }) {

  // This avoids a current error in webfont loader that
  // breaks with an undefined window size
  useEffect(() => {
    const WebFontLoader = require('webfontloader')
    WebFontLoader.load({
      google: {
        families: ['Roboto']
      }
    })
  }, [])

  const [user] = useAuthState(auth);

  return (
    <UserContext.Provider value={{ user }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp
