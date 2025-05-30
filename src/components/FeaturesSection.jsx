import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faAward,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const FeaturesSection = () => (
  <section id="features" className="features-section">
    <h2 className="features-title">
      💡 Tại sao nên chọn <span className="highlight">InnoLearn?</span>
    </h2>
    <p className="features-subtitle">
      Chúng tôi không chỉ cung cấp khóa học – chúng tôi mang đến cơ hội thay đổi
      tương lai của bạn.
    </p>
    <div className="feature-grid">
      <div className="feature-card">
        <FontAwesomeIcon icon={faGraduationCap} className="feature-icon" />
        <h3>Học bổng hấp dẫn</h3>
        <p>
          Tiếp cận tri thức mà không lo rào cản tài chính. InnoLearn trao tặng
          học bổng cho học viên có tiềm năng.
        </p>
      </div>
      <div className="feature-card">
        <FontAwesomeIcon icon={faStar} className="feature-icon" />
        <h3>Khoá học chất lượng</h3>
        <p>
          Từ lập trình đến kỹ năng mềm – bạn sẽ tìm thấy lộ trình học phù hợp
          với mục tiêu phát triển cá nhân và nghề nghiệp.
        </p>
      </div>
      <div className="feature-card">
        <FontAwesomeIcon icon={faAward} className="feature-icon" />
        <h3>Chứng chỉ toàn cầu</h3>
        <p>
          Hoàn thành khóa học và nhận chứng chỉ uy tín, nâng tầm hồ sơ cá nhân &
          sự nghiệp của bạn.
        </p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
