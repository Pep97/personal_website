require('dotenv').config({ path: './api.env' });
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/value', async (req, res) => {
    try {
        const accessKey = process.env.VALUE; 
        const result = { message: accessKey }; 
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing the request' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// run "node server.js" in the terminal to start the server