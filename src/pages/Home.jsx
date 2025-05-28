import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/homestyle.css";

import logo from "../assets/images/logo.png";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/html.png";
import c3 from "../assets/images/sql.jpg";
import c4 from "../assets/images/python.jpg";
import c5 from "../assets/images/java.png";
import c6 from "../assets/images/css.png";

import Typewriter from "typewriter-effect";
import heroImg from "../assets/images/hero-illustration.png"; // ảnh minh họa

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("token");
  return (
    <div>
      <Navbar page={"home"} />
      <div>
        {/* Phần mở đầu trang chủ */}
        <section id="home" className="hero-section">
          <div className="container-center">
            <div className="hero-content">
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Tương lai rộng mở cùng NTA InnoLearn",
                      "Nâng tầm tri thức với khóa học chất lượng",
                      "Học mọi lúc, ở mọi nơi, chỉ với 1 cú click",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 20,
                  }}
                />
              </h1>
              <p>
                InnoLearn là nền tảng học tập trực tuyến hàng đầu, cung cấp lộ
                trình học tối ưu với <strong>video sinh động</strong>,{" "}
                <strong>tài liệu chi tiết</strong> và{" "}
                <strong>bài kiểm tra tương tác</strong>, giúp bạn phát triển kỹ
                năng một cách hiệu quả.
              </p>
              <div className="hero-buttons">
                <a className="blue" href="#features">
                  🚀 Tìm hiểu thêm
                </a>
                <a className="yellow" href="#courses">
                  🎓 Khám phá khóa học
                </a>
              </div>
            </div>
            <div className="hero-illustration">
              <img src={heroImg} alt="Learning illustration" />
            </div>
          </div>
        </section>
        {/* Hết phần mở đầu */}

        {/* Phần tính năng */}
        <section id="features" className="features-section">
          <h2 className="features-title">
            💡 Tại sao nên chọn <span className="highlight">InnoLearn?</span>
          </h2>
          <p className="features-subtitle">
            Chúng tôi không chỉ cung cấp khóa học – chúng tôi mang đến cơ hội
            thay đổi tương lai của bạn.
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="feature-icon"
              />
              <h3>Học bổng hấp dẫn</h3>
              <p>
                Tiếp cận tri thức mà không lo rào cản tài chính. InnoLearn trao
                tặng học bổng cho học viên có tiềm năng.
              </p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faStar} className="feature-icon" />
              <h3>Khoá học chất lượng</h3>
              <p>
                Từ lập trình đến kỹ năng mềm – bạn sẽ tìm thấy lộ trình học phù
                hợp với mục tiêu phát triển cá nhân và nghề nghiệp.
              </p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faAward} className="feature-icon" />
              <h3>Chứng chỉ toàn cầu</h3>
              <p>
                Hoàn thành khóa học và nhận chứng chỉ uy tín, nâng tầm hồ sơ cá
                nhân & sự nghiệp của bạn.
              </p>
            </div>
          </div>
        </section>
        {/* Hết phần tính năng */}
        {/* Danh sách 8 khóa học phổ biến nhất */}
        {/* CẦN GỌI API TỪ BACKEND */}
        <section id="course">
          <h1>Khóa học phổ biến nhất</h1>
          <p>
            🎉 Hơn <strong>10,000+</strong> học viên đã tham gia và thành công
          </p>
          <div className="course-box">
            <div className="courses">
              <img src={c1} alt="JavaScript Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>JavaScript Beginner Course</h6>
                <p className="short-desc">
                  Học cơ bản về JS, DOM, vòng lặp, hàm, đối tượng và project
                  cuối khóa.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>

            <div className="courses">
              <img src={c2} alt="HTML Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>HTML Complete Course</h6>
                <p className="short-desc">
                  Học HTML5 từ cơ bản đến nâng cao, tạo giao diện web chuyên
                  nghiệp.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>

            <div className="courses">
              <img src={c3} alt="SQL Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>SQL Beginner Course</h6>
                <p className="short-desc">
                  Từ SELECT cơ bản đến JOIN nâng cao, quản lý dữ liệu hiệu quả.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>

            <div className="courses">
              <img src={c4} alt="Python Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>Python Master Course</h6>
                <p className="short-desc">
                  Lập trình Python qua thực hành, xử lý tệp, web scraping, hướng
                  OOP.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>

            <div className="courses">
              <img src={c5} alt="Java Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>Java Essentials</h6>
                <p className="short-desc">
                  Học Java, OOP, collection, xử lý file và giới thiệu Spring
                  Boot.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>

            <div className="courses">
              <img src={c6} alt="CSS Course" />
              <div className="details">
                <p className="updated-date">Cập nhật: 12/08/23</p>
                <h6>CSS Complete Course</h6>
                <p className="short-desc">
                  Flexbox, Grid, animation, responsive – làm chủ giao diện web
                  hiện đại.
                </p>
                <div className="star-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="i"
                      />
                    ))}
                  </div>
                  <p>(239 đánh giá)</p>
                </div>
              </div>
              <div className="cost">$49.99</div>
            </div>
          </div>
        </section>
        {/* Hết danh sách phổ biến */}
        {/* Phần kêu gọi đăng ký */}
        <section id="registration">
          <div className="registration-container">
            <div className="reminder">
              <p className="badge">🎉 Ưu đãi giới hạn</p>
              <h1>Nhận 100 khóa học trực tuyến hoàn toàn miễn phí</h1>
              <p className="subtext">
                Đăng ký ngay để không bỏ lỡ cơ hội học tập chất lượng cùng
                InnoLearn!
              </p>
              <div className="time">
                <div className="date">
                  <strong>18</strong>
                  <br />
                  Ngày
                </div>
                <div className="date">
                  <strong>23</strong>
                  <br />
                  Giờ
                </div>
                <div className="date">
                  <strong>06</strong>
                  <br />
                  Phút
                </div>
                <div className="date">
                  <strong>58</strong>
                  <br />
                  Giây
                </div>
              </div>
            </div>

            {!authToken && (
              <div className="form">
                <h3>🎓 Tạo tài khoản miễn phí</h3>
                <input type="text" placeholder="👤 Họ và tên" />
                <input type="email" placeholder="📧 Email" />
                <input type="password" placeholder="🔒 Mật khẩu" />
                <input type="tel" placeholder="📱 Số điện thoại" />
                <div className="btn">
                  <a className="yellow" href="#">
                    Đăng ký ngay
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
        {/* Hết phần kêu gọi đăng ký */}
        <Footer />
      </div>
    </div>
  );
}
export default Home;
