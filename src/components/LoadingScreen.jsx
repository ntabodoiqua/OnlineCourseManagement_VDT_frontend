import React from "react";
import "../assets/css/loading.css"; // 👈 tự tạo file này

function LoadingScreen() {
  return (
    <div className="loading-screen d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Đang tải...</span>
      </div>
    </div>
  );
}

export default LoadingScreen;
