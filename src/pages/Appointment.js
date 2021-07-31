import React from "react";
import Navbar from "../components/Navbar"

function Appointment() {
    return(
        <div class="appointmentBG">
            <Navbar/>
            <br></br>
            <iframe id="schedulingframe" src="https://app.acuityscheduling.com/schedule.php?owner=12995073" title="Schedule Appointment" width="80%" height="900" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>
        

    )
}
export default Appointment;