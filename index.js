const express = require('express')
    , app = express()
    , PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});