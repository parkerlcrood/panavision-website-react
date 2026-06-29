const express = require('express');
const router = express.Router();
const pool = require('../../db.js'); 

// GET all
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM merch');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});


//GET Single Item
router.get('/:id', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM merch WHERE merch_id = $1', [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({msg: `Item ${req.params.id} not found` });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});


//POST - Create Item
router.post('/', async(req, res) => {
    try {
        const result = await pool.query("INSERT INTO merch VALUES ($1, $2, $3, $4, $5, $6)", [
            req.body.merch_id,
            req.body.merch_name || "Default Name",
            req.body.merch_description || "Default Description",
            req.body.funny || 0,
            req.body.merch_price || 0.00,
            req.body.images || ["/blank.png"]
        ]);
        res.json({msg: `Item ${req.body.merch_name ? req.body.merch_name : req.body.merch_id} added successfully`});
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

//PUT - Update Item
router.put('/:id', async (req, res) => {
    try {
        const result = await pool.query("UPDATE merch SET merch_id = COALESCE($1, merch_id), \
            merch_name = COALESCE($2, merch_name), \
            merch_description = COALESCE($3, merch_description), \
            merch_funny = COALESCE($4, merch_funny), \
            merch_price = COALESCE($5, merch_price), \
            images = COALESCE($6, images) \
            WHERE merch_id = $7",
            [
                req.body.merch_id,
                req.body.merch_name,
                req.body.merch_description,
                req.body.funny,
                req.body.merch_price,
                req.body.images,
                req.params.id
            ]);
        if (result.rowCount === 0) {
            return res.status(404).json({msg: `Item ${req.params.id} not found` });
        }
        res.json({msg: `Item ${req.params.id} updated successfully`});
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

//Delete Item
router.delete('/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM merch WHERE merch_id = $1', [req.params.id]);
        if (result.rowCount === 0) {
            return res.status(404).json({msg: `Item ${req.params.id} not found` });
        }
        res.json({msg: `Item ${req.params.id} deleted successfully`});
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;