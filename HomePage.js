import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../components/Modal.css";
import "./HomePage.css";

function HomePage() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [modal, setModal] = useState(null); // 'login', 'signup', or null
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setVisibleSection(location.state.scrollTo);
      setTimeout(() => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    }
  }, [location]);

  // Listen for custom events from NavbarComponent
  useEffect(() => {
    const handleShowSection = (e) => {
      setVisibleSection(e.detail);
      setTimeout(() => {
        const section = document.getElementById(e.detail);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    };
    window.addEventListener("showSection", handleShowSection);

    const handleOpenModal = (e) => {
      setModal(e.detail);
    };
    window.addEventListener("openModal", handleOpenModal);

    return () => {
      window.removeEventListener("showSection", handleShowSection);
      window.removeEventListener("openModal", handleOpenModal);
    };
  }, []);

  return (
    <>
      <video autoPlay muted loop className="bg-video">
        <source src={require("../assets/background.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <NavbarComponent onShowSection={setVisibleSection} />

      <Modal open={modal === "login"} onClose={() => setModal(null)}>
        <Login />
      </Modal>
      <Modal open={modal === "signup"} onClose={() => setModal(null)}>
        <Signup />
      </Modal>

      <main className="home-page">
        <section className="welcome-text">
          <h1>Welcome to Smart Healthcare</h1>
          <p>Your fingerprint-based blood group detection and doctor appointment solution.</p>
        </section>

        {visibleSection === "about" && (
          <section id="about" className="info-section" style={{marginTop: 32}}>
            <h2>About Us</h2>
            <p>
              Welcome to the Smart Health Portal. Our mission is to simplify healthcare access by enabling fast
              appointment bookings, smart diagnostics, and integrated health services for everyone.
            </p>
          </section>
        )}

        {visibleSection === "contact" && (
          <section id="contact" className="info-section" style={{marginTop: 32}}>
            <h2>Contact Us</h2>
            <p>
              📧 Email: deepthi@smarthealth.com<br />
              📞 Phone: +91-6302996331
            </p>
          </section>
        )}
      </main>
    </>
  );
}


export default HomePage;
