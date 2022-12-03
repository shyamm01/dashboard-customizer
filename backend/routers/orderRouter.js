const express = require("express")
const router = express.Router()

router.get("/add", (req, res) => {
  res.send("add request on orderRouter")
})

router.get('/update', (req, res) => {
    res.send('update request on order router');
})

module.exports = router;