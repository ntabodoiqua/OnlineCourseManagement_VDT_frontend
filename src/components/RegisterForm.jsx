import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faCheck,
  faEnvelope,
  faPhone,
  faCalendarAlt,
  faVenusMars,
  faInfoCircle,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/registerForm.css";

function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    bio: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  const nameRegex = /^[A-Za-zÀ-ỹà-ỹ\s'-]{1,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
  const phoneRegex = /^0\d{9}$/;

  const calculateAge = (dobStr) => {
    if (!dobStr) return 0;
    const dob = new Date(dobStr);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[@$!%*#?&^]/.test(password)) strength++;
    return strength;
  };

  const validate = (field, value) => {
    switch (field) {
      case "username":
        if (!value) return "Tên đăng nhập là trường bắt buộc";
        if (!usernameRegex.test(value)) return "Tên đăng nhập không hợp lệ";
        return "";
      case "password":
        if (!value) return "Mật khẩu là trường bắt buộc";
        if (!passwordRegex.test(value)) return "Mật khẩu yếu";
        return "";
      case "confirmPassword":
        if (value !== formData.password) return "Mật khẩu xác nhận không khớp";
        return "";
      case "firstName":
        if (value && !nameRegex.test(value)) return "Họ tên không hợp lệ";
        return "";
      case "lastName":
        if (value && !nameRegex.test(value)) return "Họ tên không hợp lệ";
        return "";
      case "dob":
        if (!value) return "Ngày sinh là trường bắt buộc";
        if (calculateAge(value) < 5) return "Bạn phải ít nhất 5 tuổi";
        return "";
      case "email":
        if (!value) return "Email là trường bắt buộc";
        if (!emailRegex.test(value)) return "Email không hợp lệ";
        return "";
      case "phone":
        if (value && !phoneRegex.test(value))
          return "Số điện thoại không hợp lệ";
        return "";
      case "bio":
        if (value.length > 500) return "Mô tả không được vượt quá 500 ký tự";
        return "";
      case "gender":
        if (value && !["MALE", "FEMALE", "OTHER"].includes(value))
          return "Giới tính không hợp lệ";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const errs = {};
    Object.keys(formData).forEach((key) => {
      const err = validate(key, formData[key]);
      if (err) errs[key] = err;
    });
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateAll();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      const response = await fetch("http://localhost:8080/lms/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          gender: formData.gender.toUpperCase(),
        }),
      });

      if (response.ok) {
        toast.success(
          "Bạn đã đăng ký thành công! Vui lòng đăng nhập để sử dụng.",
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        setTimeout(() => navigate("/login"), 3000);
      } else {
        const data = await response.json();
        const code = data.code;
        const message = data.message || "Đăng ký thất bại.";
        const newErrors = {};

        switch (code) {
          case 1003:
          case 1004:
            newErrors.username = message;
            break;
          case 1005:
          case 1006:
            newErrors.password = message;
            break;
          case 1008:
            newErrors.dob = message;
            break;
          case 1009:
          case 1011:
            newErrors.email = message;
            break;
          case 1010:
          case 1012:
            newErrors.phone = message;
            break;
          default:
            toast.error(message, {
              position: "top-center",
              autoClose: 4000,
            });
        }

        if (Object.keys(newErrors).length > 0) {
          setErrors((prev) => ({ ...prev, ...newErrors }));
        }
        setError(message);
      }
    } catch (err) {
      toast.error(
        "Đăng ký thất bại. Vui lòng kiểm tra kết nối hoặc thử lại sau.",
        {
          position: "top-center",
          autoClose: 4000,
        }
      );
      setError("Registration error");
    }
  };

  const renderInput = (icon, type, name, placeholder, required = false) => (
    <div className="col-md-6 mb-3">
      <div className="input-group">
        <span className="input-group-text">
          <FontAwesomeIcon icon={icon} />
        </span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${errors[name] ? "is-invalid" : ""}`}
          value={formData[name]}
          onChange={handleChange}
          required={required}
        />
        <div className="invalid-feedback">{errors[name]}</div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Tạo tài khoản mới</h2>
              <form onSubmit={handleSubmit} noValidate>
                <h5 className="text-primary mb-3">Thông tin tài khoản</h5>
                <div className="row">
                  {renderInput(
                    faUser,
                    "text",
                    "username",
                    "Tên đăng nhập",
                    true
                  )}
                  {renderInput(
                    faLock,
                    "password",
                    "password",
                    "Mật khẩu",
                    true
                  )}
                </div>
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className={`progress-bar ${
                          getPasswordStrength(formData.password) < 3
                            ? "bg-danger"
                            : getPasswordStrength(formData.password) < 5
                            ? "bg-warning"
                            : "bg-success"
                        }`}
                        style={{
                          width: `${
                            (getPasswordStrength(formData.password) / 5) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {renderInput(
                    faCheck,
                    "password",
                    "confirmPassword",
                    "Xác nhận mật khẩu",
                    true
                  )}
                </div>

                <h5 className="text-primary mt-4 mb-3">Thông tin cá nhân</h5>
                <div className="row">
                  {renderInput(faSignature, "text", "firstName", "Họ")}
                  {renderInput(faSignature, "text", "lastName", "Tên")}
                </div>
                <div className="row">
                  {renderInput(faCalendarAlt, "date", "dob", "Ngày sinh", true)}
                  {renderInput(faEnvelope, "email", "email", "Email", true)}
                </div>
                <div className="row">
                  {renderInput(faPhone, "tel", "phone", "Số điện thoại")}
                </div>

                <div className="mb-3">
                  <label className="form-label">Giới thiệu bản thân</label>
                  <textarea
                    className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                    name="bio"
                    rows="3"
                    maxLength="500"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Viết một đoạn ngắn về bạn (tối đa 500 ký tự)"
                  ></textarea>
                  <div className="invalid-feedback">{errors.bio}</div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Giới tính</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faVenusMars} />
                    </span>
                    <select
                      className={`form-select ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="">Chọn giới tính</option>
                      <option value="MALE">Nam</option>
                      <option value="FEMALE">Nữ</option>
                      <option value="OTHER">Khác</option>
                    </select>
                    <div className="invalid-feedback">{errors.gender}</div>
                  </div>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Đăng ký
                  </button>
                </div>

                <div className="text-center mb-3">
                  <button type="button" className="btn btn-outline-danger">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                      alt="Google"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    Đăng ký bằng Google
                  </button>
                </div>
              </form>
              <p className="mt-4 text-center">
                Đã có tài khoản?
                <Link to="/login" className="ms-1 text-primary fw-semibold">
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
