import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-content">
      <h1 className="landing-title">Welcome to Smart Healthcare</h1>
      <p className="landing-subtitle">
        Experience AI-powered Blood Detection & Doctor Booking
      </p>

      {/* About Section */}
      <section id="about" className="section" style={{ paddingTop: "80px", color: "#fff" }}>
        <h2>About Us</h2>
        <p>
          We aim to revolutionize healthcare with fingerprint-based blood group
          detection and fast doctor appointment booking. 
          Our AI-powered solutions provide faster, more accurate results.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ paddingTop: "80px", color: "#fff" }}>
        <h2>Contact Us</h2>
        <p>Email: support@smarthealth.com | Phone: +91-9876543210</p>
      </section>
    </div>
  );
}

export default LandingPage;
