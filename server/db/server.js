const express = require('express');
const pool = require('./db');
const port = 1337;

const app = express();
app.use(express.json());

//routes
app.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM merchItems');
        res.status(200).json(data.rows);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.post('/', async (req, res) => {
    const {text, price} = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO merchItems (text, price) VALUES ($1, $2) RETURNING *',
            [text, price]
        );
        res.status(201).json(result.rows[0]);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.get('/setup', async (req, res) => {
    try {
        await pool.query('CREATE TABLE IF NOT EXISTS merchItems (id SERIAL PRIMARY KEY, text VARCHAR(100), price VARCHAR(10))');
        res.status(200).json({
            message: "Successfully created table"
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))