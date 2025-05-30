import Typewriter from "typewriter-effect";
import heroImg from "../assets/images/hero-illustration.png"; // Đổi path nếu khác

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container-center">
        <div className="hero-content">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Enlighten your future",
                  "Nâng tầm tri thức",
                  "Học mọi lúc, ở mọi nơi",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 20,
              }}
            />
          </h1>
          <p>
            InnoLearn là nền tảng học tập trực tuyến hàng đầu, cung cấp lộ trình
            học tối ưu với <strong>video sinh động</strong>,{" "}
            <strong>tài liệu chi tiết</strong> và{" "}
            <strong>bài kiểm tra tương tác</strong>, giúp bạn phát triển kỹ năng
            một cách hiệu quả.
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
  );
};

export default HeroSection;
