import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/underConstruction.css";

function UnderConstruction({ title = "Trang đang được xây dựng" }) {
  return (
    <div className="under-construction-wrapper">
      <Navbar />
      <main className="under-construction-main">
        <div className="container text-center py-5">
          <div className="construction-icon mb-4">
            <i className="fas fa-hard-hat"></i>
            <i className="fas fa-tools"></i>
            <i className="fas fa-wrench"></i>
          </div>
          <h1 className="mb-4">{title}</h1>
          <p className="lead mb-4">
            Chúng tôi đang nỗ lực hoàn thiện tính năng này. Vui lòng quay lại sau!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-home me-2"></i>
              Về trang chủ
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline-secondary"
            >
              <i className="fas fa-arrow-left me-2"></i>
              Quay lại
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UnderConstruction; 