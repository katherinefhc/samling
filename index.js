const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Static Files
app.use('/public', express.static('public'))

// Home Page
app.get('/', (req, res) => res.sendFile('samling.html', { root: __dirname }))

app.listen(port, () => console.log(`Listening on port ${port}!`))