const jwt = require('jsonwebtoken');
const db = require('../models');

exports.deleteComment = (req, res, next) => {
    const decodedToken = jwt.decode(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET_TOKEN);
    const roles = decodedToken.roles;

    if (roles.includes('ROLE_MODERATOR')) {
        db.Comment.destroy({ where: { id: req.params.id } })
            .then(() => res.status(200).json({ message: 'Post supprimé !' }))
            .catch(error => res.status(404).json({ error }))
    } else {
        return res.status(403).json({ error: 'Vous ne disposez pas de droits suffisants' })
    }
}
