import React from 'react';
import {
    useLocation,
    Link
} from 'react-router-dom';

import './Header.scss';
import groupomoniaLogo from './groupomania-white-logo.svg'

function Header() {
    let { pathname } = useLocation();

    return (
        <header className="header">
            <div className="header__logo">
                <img src={groupomoniaLogo} height="30px" width="auto" alt="Groupomania logo"/>
            </div>

            { pathname === '/register' || pathname === '/login' ? (
                <ul className="header__nav">
                    <li>
                        <Link
                            to="/register"
                            className={pathname === '/register' ? 'active' : ''}
                        >Inscription</Link>
                    </li>
                    <li>
                        <Link
                            to='/login'
                            className={pathname === '/login' ? 'active' : ''}
                        >Connexion</Link>
                    </li>
                </ul>
            ) : (
                <ul className="header__nav">
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/'>Profil</Link>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Header;
