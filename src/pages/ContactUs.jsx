import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Contact({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="contact-page container py-5">
        <h2 className="text-center mb-4 text-primary fw-bold">
          Liên hệ với InnoLearn
        </h2>
        <p className="text-center mb-5 text-muted">
          Hãy gửi tin nhắn cho chúng tôi nếu bạn có bất kỳ câu hỏi, góp ý hoặc
          muốn hợp tác.
        </p>
        <div className="row g-5">
          {/* Form bên trái */}
          <div className="col-md-7">
            <div className="contact-form p-4 shadow-sm rounded bg-white">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Chủ đề liên hệ"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Nội dung
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Viết nội dung tại đây..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Gửi liên hệ
                </button>
              </form>
            </div>
          </div>

          {/* Thông tin công ty bên phải */}
          <div className="col-md-5">
            <div className="company-info p-4 shadow-sm rounded bg-light">
              <h5 className="fw-bold text-dark mb-3">
                InnoLearn - Nền tảng giáo dục sáng tạo
              </h5>
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                Tầng 3, Tòa nhà ABC, Quận 1, TP. Hồ Chí Minh
              </p>
              <p>
                <FaPhone className="me-2 text-primary" />
                (+84) 912 345 678
              </p>
              <p>
                <FaEnvelope className="me-2 text-primary" />
                contact@innolearn.edu.vn
              </p>
              <hr />
              <h6 className="text-muted mb-2">Theo dõi chúng tôi:</h6>
              <p className="d-flex gap-3 fs-5">
                <a
                  href="https://facebook.com/innolearn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="text-primary" />
                </a>
                <a
                  href="https://linkedin.com/company/innolearn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-primary" />
                </a>
              </p>
              <hr />
              <p className="text-muted small">
                InnoLearn cam kết mang đến trải nghiệm học tập hiện đại, thân
                thiện và chất lượng cho học viên ở mọi lứa tuổi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
