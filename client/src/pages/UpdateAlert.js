import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
function handleSubmit(e){
    e.preventDefault()
    console.log(document.getElementById("alertmessage").value)
    axios.put("/api/message/",
    {
        message: document.getElementById("alertmessage").value
    }

    )

}

function updateAlert(){
    return (
        <div>
    <Navbar/>
    Please type in the alert message:<input id="alertmessage"/>
    <button onClick={handleSubmit}>Submit</button>

        </div>
    );


};
export default updateAlert;