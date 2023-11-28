import React from "react";
import PersistentDrawerRight from "../components/Nav.js";

function Schedule() {
  return (
    <div id="schedulepage">
      <div>
        <PersistentDrawerRight />
      </div>
      <iframe
        id="schedulingframe"
        src="https://app.acuityscheduling.com/schedule.php?owner=12995073"
        title="Schedule Appointment"
        width="80%"
        height="900"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
}

export default Schedule;
