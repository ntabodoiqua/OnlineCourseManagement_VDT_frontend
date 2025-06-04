import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/notFound.css";

function NotFound() {
  return (
    <div className="not-found-wrapper">
      <Navbar />
      <main className="not-found-main">
        <div className="container text-center py-5">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-4">Oops! Trang không tồn tại</h2>
          <p className="lead mb-4">
            Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
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

export default NotFound; 