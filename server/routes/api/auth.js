const express = require('express');
const app = express();
const authRouter = express.Router();
const pool = require('../../db.js'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

authRouter.get('/admin', authenticateToken, requireAdmin, (req, res) => {
    res.json(req.user);
})

function requireAdmin(req, res, next){
    if(req.user.perm_lvl < 1){
        return res.res.sendStatus(401);
    }
    next();
}

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    })
}

module.exports = authRouter;