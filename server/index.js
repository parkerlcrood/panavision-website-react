const express = require('express');
const app = express();
const merchRouter = require('./routes/api/merch.js');

app.use(express.json());

app.use('/api/merch', merchRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));