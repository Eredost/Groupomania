const jwt = require('jsonwebtoken');
require('dotenv').config();

const db = require('../models');

exports.deleteCurrentUser = (req, res, next) => {
    const decodedToken = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET_TOKEN);
    const userId = decodedToken.userId;

    db.User.destroy({ where: { id: userId } })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !' }))
        .catch(error => res.status(404).json({ error }))
}
