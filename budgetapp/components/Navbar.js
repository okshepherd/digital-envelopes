import Link from "next/link";
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function NavBar({ }) {
    const { user } = useContext(UserContext)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <button>LOGO HERE</button>
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>


                {/* user is signed-in*/}
                {user && (
                    <>
                        <li>
                            <Link href="/admin">
                                <button className="button is-info">Write Posts</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${user}`}>
                                <img src={user?.photoURL} />
                            </Link>
                        </li>
                    </>
                )}


                {/* user is not signed-in*/}
                {!user && (
                    <li>
                        <Link href="/enter">
                            <button className="button is-success">Log In</button>
                        </Link>
                    </li>
                )}


            </div>
            <div id="desktopView" className="navbar-menu">

            </div>
        </nav>
    )
}