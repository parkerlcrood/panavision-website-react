require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const merchRouter = require('./routes/api/merch.js');
const authRouter = require('./routes/api/auth.js');

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use('/api/merch', merchRouter);
app.use('/api/auth', authRouter);

let refreshTokens = []

app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403);
        }
        const accessToken = generateAccessToken({name : user.user_name});
        res.json({accessToken: accessToken});
    })
})

app.post('/login', async(req, res) =>{

    try {
        const { user_id, password } = req.body;

        const userResult = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
        const user = userResult.rows[0];

        if (!user){
            return res.status(400).json({ msg: "User ID does not exist" });
        }

        const succ = await bcrypt.compare(password, user.password);

        if (!succ){
            return res.status(401).json({ msg: "Password is incorrect" });
        }

        const accessToken = generateAccessToken({
            user_id: user.user_id,
            user_name: user.user_name,
            perm_lvl: user.perm_lvl,
        });
        const refreshToken = generateAccessToken({
            user_id: user.user_id,
            user_name: user.user_name,
            perm_lvl: user.perm_lvl,
        });
        refreshTokens.push(refreshToken);

        res.json({accessToken: accessToken, refreshToken: refreshToken});

    } catch (err) {
        return res.status(500).json({ msg: "Internal server error" });
    }
})

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5m'});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));