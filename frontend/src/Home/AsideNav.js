import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faCalendar, faUsers } from '@fortawesome/free-solid-svg-icons'

import './AsideNav.scss';

function AsideNav() {
    return (
        <div className="sidebar-nav">
            <a className="sidebar-nav__link active" href="/">
                <FontAwesomeIcon icon={faHome} className="sidebar-nav__icon"/>
                <span className="sidebar-nav__anchor">Actualités</span>
            </a>
            <a className="sidebar-nav__link" href="/">
                <FontAwesomeIcon icon={faEnvelope} className="sidebar-nav__icon"/>
                <span className="sidebar-nav__anchor">Messages</span>
            </a>
            <a className="sidebar-nav__link" href="/">
                <FontAwesomeIcon icon={faCalendar} className="sidebar-nav__icon"/>
                <span className="sidebar-nav__anchor">Evenements</span>
            </a>
            <a className="sidebar-nav__link" href="/">
                <FontAwesomeIcon icon={faUsers} className="sidebar-nav__icon"/>
                <span className="sidebar-nav__anchor">Groupes</span>
            </a>
            <a className="sidebar-nav__link" href="/">
                <FontAwesomeIcon icon={faUsers} className="sidebar-nav__icon"/>
                <span className="sidebar-nav__anchor">Amis</span>
            </a>
        </div>
    )
}

export default AsideNav;
