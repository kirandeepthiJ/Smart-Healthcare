import React from "react";
import CardOption from "./CardOption";
import "./CardOption.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <CardOption
        title="Blood Test"
        image="/images/blood.png"
        path="/blood-group-form"
      />
      <CardOption
        title="Doctor Appointment"
        image="/images/doctor.png"
        path="/appointment"
      />
    </div>
  );
}

export default Dashboard;