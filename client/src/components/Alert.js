import axios from "axios"
import { useAtom } from "jotai";
import { AlertM } from "../Atoms.js";

// function Alert (){
//     return(

//     )
// }
// export default Alert


function Alert() {
    const [alertM,setalertM] = useAtom(AlertM)

    axios.get("/api/message/")
    .then((res=> setalertM(res.data[0].message)))
        // axios.get("/api/message/").then((res) =>{
        //     // setAlert(res.data[0].message)
        //     console.log(res.data[0].message)
        // })
    return(  
                     
    <div id="alert">
    <span class="closebtn">&times;</span>
    <strong>Attention!</strong> {alertM}
    </div>)
        // <div id="alert">
        // <span class="closebtn" onClick={removeAlert}>&times;</span>
        // <strong>Attention!</strong> {alert}
        // </div>)
}
export default Alert;
