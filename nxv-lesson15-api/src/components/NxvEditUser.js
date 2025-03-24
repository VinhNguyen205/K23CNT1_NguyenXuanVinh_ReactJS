import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NxvAxiosUsers from '../api/Nxv_api';

export default function NxvEditUser() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Nxv_name: '',
    Nxv_email: '',
    Nxv_phone: '',
    Nxv_active: '',
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await NxvAxiosUsers.get(`/Nxv_users/${id}`);
        setFormData(response.data); 
      } catch (error) {
        console.error('Error fetching user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi tải thông tin user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    };
    fetchUser();
  }, [id]);


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (e.target.value === 'true') : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await NxvAxiosUsers.put(`/Nxv_users/${id}`, formData);
      setAlert({ type: 'success', message: 'Cập nhật user thành công!' });
      setTimeout(() => {
        setAlert(null);
        navigate('/list-user');
      }, 1000);
    } catch (error) {
      console.error('Error updating user:', error);
      setAlert({ type: 'danger', message: 'Lỗi khi cập nhật user!' });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sửa Thông Tin User</h2>
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setAlert(null)}
            aria-label="Close"
          ></button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Nxv_name" className="form-label">
            Họ và Tên
          </label>
          <input
            type="text"
            className={`form-control ${errors.Nxv_name ? 'is-invalid' : ''}`}
            id="Nxv_name"
            name="Nxv_name"
            value={formData.Nxv_name}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
          />
          {errors.Nxv_name && <div className="invalid-feedback">{errors.Nxv_name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="Nxv_email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.Nxv_email ? 'is-invalid' : ''}`}
            id="Nxv_email"
            name="Nxv_email"
            value={formData.Nxv_email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          {errors.Nxv_email && <div className="invalid-feedback">{errors.Nxv_email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="Nxv_phone" className="form-label">
            Số Điện Thoại
          </label>
          <input
            type="text"
            className={`form-control ${errors.Nxv_phone ? 'is-invalid' : ''}`}
            id="Nxv_phone"
            name="Nxv_phone"
            value={formData.Nxv_phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
          {errors.Nxv_phone && <div className="invalid-feedback">{errors.Nxv_phone}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Trạng Thái</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="Nxv_active_true"
              name="Nxv_active"
              value="true"
              checked={formData.Nxv_active === true}
              onChange={handleChange}
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
              checked={formData.Nxv_active === false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="Nxv_active_false">
              Khóa
            </label>
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2">
          <button type="submit" className="btn btn-primary">
            Cập Nhật
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/list-user')}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}