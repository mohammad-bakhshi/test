const app = require('express')();
const port = 3000;


app.get('/', (req, res) => {
    res.json({ message: req.url });
})


app.get('/aboutme', (req, res) => {
    res.json({ message: req.url });
})

app.get('/contactme', (req, res) => {
    res.json({ message: req.url });
})

app.get('/home', (req, res) => {
    res.json({ message: req.url });
})


app.listen(port, () => console.log(`Listening on port ${port}...`));