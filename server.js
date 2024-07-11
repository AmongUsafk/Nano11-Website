const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

// Serve static files from the Nano11Website directory
app.use(express.static(path.join(__dirname, 'Nano11Website')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Nano11Website', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
