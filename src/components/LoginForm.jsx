import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/loginForm.css";

function LoginForm({ siteKey }) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetCaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setRecaptchaToken(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    if (!recaptchaToken) {
      toast.error("Vui lòng xác minh bạn không phải là robot.", {
        position: "top-center",
        closeOnClick: true,
        closeButton: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/lms/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok && data.code === 1000) {
        const token = data.result.token;
        login(token);

        // ✅ Giải mã token để lấy role và đồng bộ format với AuthContext
        const decoded = jwtDecode(token);
        const role = decoded.scope?.[0]?.replace("ROLE_", "") || "STUDENT";

        // ✅ Điều hướng theo role đã được format
        const redirectPath =
          role === "ADMIN"
            ? "/admin"
            : role === "INSTRUCTOR"
            ? "/instructor"
            : "/student";

        toast.success("Đăng nhập thành công!", {
          position: "top-center",
          closeOnClick: true,
          closeButton: true,
        });

        setTimeout(() => {
          navigate(redirectPath);
        }, 1000);
      } else {
        const newErrors = {};
        switch (data.code) {
          case 1007:
            newErrors.username = "Tài khoản không tồn tại";
            break;
          case 1015:
            newErrors.password = "Mật khẩu không đúng";
            break;
          case 1042:
          case 1043:
            toast.error("Tài khoản của bạn đã bị khóa", {
              position: "top-center",
              closeOnClick: true,
              closeButton: true,
            });
            break;
          default:
            toast.error(data.message || "Đăng nhập thất bại", {
              position: "top-center",
              closeOnClick: true,
              closeButton: true,
            });
        }
        setErrors(newErrors);
        setIsSubmitting(false);
        resetCaptcha();
      }
    } catch (err) {
      toast.error("Không thể kết nối đến máy chủ", {
        position: "top-center",
        closeOnClick: true,
        closeButton: true,
      });
      setIsSubmitting(false);
      resetCaptcha();
    }
  };

  return (
    <div className="container py-5">
      <ToastContainer closeOnClick pauseOnHover draggable closeButton />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Đăng nhập</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Tên đăng nhập</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Nhập tên đăng nhập"
                      required
                    />
                    <div className="invalid-feedback">{errors.username}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Mật khẩu</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Nhập mật khẩu"
                      required
                    />
                    <div className="invalid-feedback">{errors.password}</div>
                  </div>
                </div>

                <div className="mb-4 text-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={(token) => setRecaptchaToken(token)}
                    className="d-inline-block"
                  />
                </div>

                <div className="d-grid mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Đang đăng nhập...
                      </>
                    ) : (
                      "Đăng nhập"
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-danger w-100"
                    onClick={() =>
                      toast.info("Chức năng Google sẽ được hỗ trợ sau")
                    }
                  >
                    <FontAwesomeIcon icon={faGoogle} className="me-2" />
                    Đăng nhập bằng Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
