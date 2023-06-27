import express from 'express';
const Hrouter = express.Router();

Hrouter.get('/', function (req, res) {
    res.send("Home page")
})
export default Hrouter;