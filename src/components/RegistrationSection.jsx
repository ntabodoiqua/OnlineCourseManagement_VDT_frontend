const RegistrationSection = ({ authToken }) => (
  <section id="registration">
    <div className="registration-container">
      <div className="reminder">
        <p className="badge">🎉 Ưu đãi giới hạn</p>
        <h1>Nhận 100 khóa học trực tuyến hoàn toàn miễn phí</h1>
        <p className="subtext">
          Đăng ký ngay để không bỏ lỡ cơ hội học tập chất lượng cùng InnoLearn!
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
);

export default RegistrationSection;
