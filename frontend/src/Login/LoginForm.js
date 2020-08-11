import React, { Component } from 'react';

import './LoginForm.scss';

class LoginForm extends Component {
    render() {
        return (
            <form action="" noValidate>
                <label htmlFor="email" className="login-form__label">Email</label>
                <input type="email" name="email" id="email" className="login-form__input"/>

                <label htmlFor="password" className="login-form__label">Mot de passe</label>
                <input type="password" name="password" id="password" className="login-form__input"/>

                <input type="submit" value="Se connecter" className="login-form__submit"/>
            </form>
        );
    }
}

export default LoginForm;
