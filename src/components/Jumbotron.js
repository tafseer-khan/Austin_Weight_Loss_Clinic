import React from "react";
import { motion } from "framer-motion";
import '../styles/jt.css'
const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
function Jumbotron(){
    return(

<div>
    
<div
class="jumbotron jumbotron-fluid">
<div class="container left">
    <h1 class="jheader">Welcome to <br></br>Austin Weightloss</h1>
    <motion.p
      initial="hidden"
      animate="visible"
      transition={{duration:2}}
      variants={variants} 
    class="jP">Where today is the first step into a new tomorrow.
    </motion.p>
</div>
</div>

</div>
    )
}
export default Jumbotron;
