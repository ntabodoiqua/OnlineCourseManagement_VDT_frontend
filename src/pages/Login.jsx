import React from "react";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/loginPage.css";

const LoginPage = () => (
  <div className="login-page-wrapper">
    <Navbar />
    <main>
      <LoginForm
        siteKey="6LcNlVArAAAAALPt1pyg4yWesshR-lwhUvgwNxmc"
        enableRecaptchaOnTooManyAttempts
      />
    </main>
    <Footer />
  </div>
);

export default LoginPage;
