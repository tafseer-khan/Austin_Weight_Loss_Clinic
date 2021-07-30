const router = require("express").Router();
const messageRoutes = require("./message.js");
const userRoutes = require("./user")

// Post and user routes
router.use("/message", messageRoutes);
router.use("/user",userRoutes)


module.exports = router;