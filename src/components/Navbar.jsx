import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaBookOpen,
  FaChalkboardTeacher,
  FaThList,
  FaTachometerAlt,
  FaEnvelope,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8080/lms/users/myInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 1000) {
            const result = data.result;
            const fullName = `${result.firstName || ""} ${
              result.lastName || ""
            }`.trim();
            const avatar = result.avatarUrl?.startsWith("http")
              ? result.avatarUrl
              : `http://localhost:8080/lms${result.avatarUrl}`;
            setUser({
              name: fullName || result.username,
              avatar,
              role: result.roles?.[0]?.name || "STUDENT",
            });
          } else {
            setUser(null);
          }
        })
        .catch(() => setUser(null));
    } else setUser(null);
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  const menu = [
    { label: "Trang chủ", to: "/", icon: <FaHome /> },
    { label: "Danh sách khóa học", to: "/courses", icon: <FaBookOpen /> },
    {
      label: "Danh sách giảng viên",
      to: "/instructors",
      icon: <FaChalkboardTeacher />,
    },
    { label: "Danh mục", to: "/categories", icon: <FaThList /> },
    ...(user
      ? [{ label: "Dashboard", to: "/dashboard", icon: <FaTachometerAlt /> }]
      : []),
    { label: "Liên hệ", to: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header>
      {/* Thanh trên với Bootstrap + custom */}
      <nav className="navbar lms-navbar-top navbar-expand-lg navbar-light">
        <div
          className="container-fluid d-flex align-items-center"
          style={{ minHeight: 54 }}
        >
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            style={{ paddingRight: 8 }}
          >
            <img src={logo} alt="Logo" height="32" />
          </Link>
          <input
            type="text"
            className="form-control lms-searchbox mx-2"
            placeholder="Tìm kiếm khóa học, giảng viên..."
            style={{
              maxWidth: "260px",
              minWidth: "120px",
              fontSize: 15,
              borderRadius: 8,
              border: "1px solid #dbeafe",
              background: "#f1f5f9",
              flexShrink: 0,
            }}
          />
          {/* Spacer đẩy auth về phải */}
          <div className="flex-grow-1" />
          <div className="d-flex align-items-center lms-auth-group">
            <button
              className={`btn ${darkMode ? "btn-warning" : "btn-dark"} me-2`}
              onClick={() => setDarkMode(!darkMode)}
              title={
                darkMode ? "Chuyển sang Light mode" : "Chuyển sang Dark mode"
              }
              style={{
                borderRadius: 20,
                fontWeight: "bold",
                minWidth: 70,
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              <span className="ms-1">{darkMode ? "Light" : "Dark"}</span>
            </button>
            {!user ? (
              <>
                <Link to="/login" className="btn btn-outline-primary me-2">
                  Đăng nhập
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Đăng ký
                </Link>
              </>
            ) : (
              <div className="d-flex align-items-center">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="rounded-circle"
                  style={{
                    width: "28px",
                    height: "28px",
                    border: "2px solid #e0e7ff",
                    objectFit: "cover",
                  }}
                />
                <span className="ms-2 me-2" style={{ fontWeight: 500 }}>
                  {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* Thanh menu dưới */}
      <nav className="navbar lms-navbar-menu navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              {menu.map((item) => (
                <li className="nav-item" key={item.to}>
                  <Link
                    className={`nav-link ${
                      location.pathname === item.to ? "active" : ""
                    }`}
                    to={item.to}
                  >
                    <span className="me-1">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
