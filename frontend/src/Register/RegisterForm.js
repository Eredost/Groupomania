import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './RegisterForm.scss';

class RegisterForm extends Component {
    render() {
        return (
            <form action="" method="post" noValidate>
                <label htmlFor="email" className="register-form__label">Email</label>
                <input type="email" name="email" id="email" className="register-form__input"/>

                <label htmlFor="username" className="register-form__label">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" className="register-form__input"/>

                <label htmlFor="password" className="register-form__label">Mot de passe</label>
                <input type="password" name="password" id="password" className="register-form__input"/>

                <p className="register-form__legal-requirements">
                    En cliquant sur Accepter et s'inscrire, vous acceptez les
                    <Link to="/register"> Conditions d'utilisation</Link>, la
                    <Link to="/register"> Politique de confidentialité</Link> et la
                    <Link to="/register"> Politique relative aux cookies</Link> de Groupomania
                </p>

                <input type="submit" value="Accepter et s'inscrire" className="register-form__submit"/>
            </form>
        );
    }
}

export default RegisterForm;
