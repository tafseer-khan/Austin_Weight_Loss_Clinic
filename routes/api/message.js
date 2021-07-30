const router = require("express").Router();
const Message = require("../../models/message")

const filter = {id: 1}


router.put("/",(req,res) =>{
    let update = {message: req.body.message}
    Message.findOneAndUpdate(filter,update,{
        new:true
    }).then(results=>{res.json(results)})

})

router.post("/",(req,res) =>{
    Message.create({
        message: req.body.message,
        id: 1
    })
    .then(results =>{
        res.json(results)
    })
})

router.get("/",(req,res) =>{
    Message.find({"id":1})
    .then(results => {
        res.json(results)
    })
})

module.exports = router;

