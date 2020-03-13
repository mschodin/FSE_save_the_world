const jwt = require('jsonwebtoken');
const secret = 'secret';

const withAuth = function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;

    if (!token){
        res.send("NO TOKEN");
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if(err){
                res.send("INVALID TOKEN");
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
}

module.exports = withAuth;