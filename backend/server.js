const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/add", (req, res) => {
    const info = req.body;
})

app.post("/update", (req, res) => {
    const info = req.body;
})

app.post("/delete", (req, res) => {
    const info = req.body;
})

app.post("/view", (req, res) => {
    const info = req.body;
})

app.listen(8000, () => {
    console.log('Listening on Port: 8000');
})