import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import "../assets/css/footerstyle.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <div className="brand-title">
            <img src={logo} alt="InnoLearn Logo" className="footer-logo" />
            <h2>InnoLearn</h2>
          </div>
          <ul className="contact-info">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Số 1 Đại Cồ Việt, Hà Nội
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} /> 0966 277 109
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> support@innolearn.vn
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Khóa học phổ biến</h4>
          <ul>
            <li>Web Development</li>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>Marketing Online</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Hệ thống</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản dịch vụ</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Kết nối</h4>
          <div className="social-icons">
            <a
              href="https://facebook.com/ntabodoiqua2004"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com/nta_bodoiqua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://linkedin.com/in/anh-nguyen-the-b08081259"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InnoLearn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
