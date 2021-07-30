const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    date: {type:Date, defualt: Date.now},
    message: {type:String},
    id: {type:Number}
})

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;