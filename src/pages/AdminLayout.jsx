import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/adminLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminLayout() {
  const location = useLocation();

  const menu = [
    { label: "Quản lý Người dùng", to: "/admin/users" },
    { label: "Quản lý Khóa học", to: "/admin/courses" },
    { label: "Quản lý Bài học", to: "/admin/lessons" },
    { label: "Quản lý File", to: "/admin/files" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <Link className="navbar-brand d-flex align-items-center" to="/admin">
          <img src={logo} alt="InnoLearn Logo" height="36" className="me-2" />
          InnoLearn Admin
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {menu.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className={`nav-link ${
                    location.pathname === item.to ? "active fw-bold" : ""
                  }`}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main
        className="admin-content-wrapper p-4 bg-light"
        style={{ minHeight: "100vh" }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
