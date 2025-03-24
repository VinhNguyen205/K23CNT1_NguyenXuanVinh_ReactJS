import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NxvAxiosUsers from "../api/Nxv_api";

export default function NxvCreateUser() {
  const navigate = useNavigate();
  const [Nxv_formData, setNxv_formData] = useState({
    Nxv_name: "",
    Nxv_email: "",
    Nxv_phone: "",
    Nxv_active: true,
  });
  const [Nxv_errors, setNxv_errors] = useState({});
  const [Nxv_alert, setNxv_alert] = useState(null);

  const Nxv_handleChange = (e) => {
    const { name, value, type } = e.target;
    setNxv_formData({
      ...Nxv_formData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!Nxv_formData.Nxv_name.trim())
      errors.Nxv_name = "Vui lòng nhập họ và tên!";
    if (!Nxv_formData.Nxv_email.trim()) {
      errors.Nxv_email = "Vui lòng nhập email!";
    } else if (!/\S+@\S+\.\S+/.test(Nxv_formData.Nxv_email)) {
      errors.Nxv_email = "Email không hợp lệ!";
    }
    if (!Nxv_formData.Nxv_phone.trim()) {
      errors.Nxv_phone = "Vui lòng nhập số điện thoại!";
    } else if (!/^\d{10,11}$/.test(Nxv_formData.Nxv_phone)) {
      errors.Nxv_phone = "Số điện thoại không hợp lệ!";
    }
    setNxv_errors(errors);
    return Object.keys(errors).length === 0;
  };
  const Nxv_handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Nxv_formData:", Nxv_formData);

    try {
      await NxvAxiosUsers.post("/Nxv_users", Nxv_formData);
      setNxv_alert({ type: "success", message: "Thêm user thành công!" });
      setTimeout(() => {
        setNxv_alert(null);
        navigate("/list-user");
      }, 1000);
    } catch (error) {
      console.error("Lỗi khi thêm user:", error);
      setNxv_alert({ type: "danger", message: "Lỗi khi thêm user!" });
      setTimeout(() => setNxv_alert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Form Thêm Mới User</h2>

      {Nxv_alert && (
        <div
          className={`alert alert-${Nxv_alert.type} alert-dismissible fade show`}
          role="alert"
        >
          {Nxv_alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setNxv_alert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={Nxv_handleSubmit}>
        {/* Họ và Tên */}
        <div className="mb-3">
          <label htmlFor="Nxv_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${
              Nxv_errors.Nxv_name ? "is-invalid" : ""
            }`}
            id="Nxv_name"
            name="Nxv_name"
            value={Nxv_formData.Nxv_name}
            onChange={Nxv_handleChange}
            placeholder="Nhập họ và tên"
          />
          {Nxv_errors.Nxv_name && (
            <div className="invalid-feedback">{Nxv_errors.Nxv_name}</div>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="Nxv_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              Nxv_errors.Nxv_email ? "is-invalid" : ""
            }`}
            id="Nxv_email"
            name="Nxv_email"
            value={Nxv_formData.Nxv_email}
            onChange={Nxv_handleChange}
            placeholder="Nhập email"
          />
          {Nxv_errors.Nxv_email && (
            <div className="invalid-feedback">{Nxv_errors.Nxv_email}</div>
          )}
        </div>

        {/* Số điện thoại */}
        <div className="mb-3">
          <label htmlFor="Nxv_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${
              Nxv_errors.Nxv_phone ? "is-invalid" : ""
            }`}
            id="Nxv_phone"
            name="Nxv_phone"
            value={Nxv_formData.Nxv_phone}
            onChange={Nxv_handleChange}
            placeholder="Nhập số điện thoại"
          />
          {Nxv_errors.Nxv_phone && (
            <div className="invalid-feedback">{Nxv_errors.Nxv_phone}</div>
          )}
        </div>

        {/* Trạng thái */}
        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Nxv_active_true"
              name="Nxv_active"
              value="true"
              checked={Nxv_formData.Nxv_active === true}
              onChange={Nxv_handleChange}
            />
            <label className="form-check-label" htmlFor="Nxv_active_true">
              Hoạt động
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Nxv_active_false"
              name="Nxv_active"
              value="false"
              checked={Nxv_formData.Nxv_active === false}
              onChange={Nxv_handleChange}
            />
            <label className="form-check-label" htmlFor="Nxv_active_false">
              Khóa
            </label>
          </div>
        </div>

        {/* Nút Thêm Mới */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Thêm Mới
          </button>
        </div>
      </form>
    </div>
  );
}