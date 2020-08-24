const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('../models');

exports.signup = (req, res, next) => {

};

exports.login = (req, res, next) => {
    db.User.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Informations d\'identification invalides' })
            }

            bcrypt.compare(req.body.password, user.password)
                .then(isValid => {
                    if (!isValid) {
                        return res.status(401).json({ error: 'Informations d\'identification invalides' })
                    }

                    res.status(200).json({
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.JWT_SECRET_TOKEN,
                            { expiresIn: '24h' }
                        ),
                    })
                })
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(400).json({ error }))
};
