import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NxvAxiosUsers from '../api/Nxv_api';

export default function NxvListUsers() {
  const navigate = useNavigate();
  const [NxvListUser, setNxvListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const NxvGetAllUser = async () => {
    setIsLoading(true);
    try {
      const NxvResp = await NxvAxiosUsers.get('/Nxv_users');
      setNxvListUser(NxvResp.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    NxvGetAllUser();
  }, []);

  const NxvHandleUpdate = (NxvId) => {
    console.log('id:', NxvId);
    navigate(`/edit-user/${NxvId}`);
    setAlert({ type: 'success', message: 'Đã chuyển đến trang cập nhật!' });
    setTimeout(() => setAlert(null), 3000);
  };

  const NxvHandleDelete = async (NxvId) => {
    if (window.confirm('Bạn có chắc muốn xóa user này không?')) {
      try {
        await NxvAxiosUsers.delete(`/Nxv_users/${NxvId}`);
        setNxvListUser(NxvListUser.filter((x) => x.id !== NxvId));
        setAlert({ type: 'danger', message: 'Đã xóa user thành công!' });
        setTimeout(() => setAlert(null), 3000);
      } catch (error) {
        console.error('Error deleting user:', error);
        setAlert({ type: 'danger', message: 'Lỗi khi xóa user!' });
        setTimeout(() => setAlert(null), 3000);
      }
    }
  };

  const NxvElementUser = NxvListUser.map((NxvUser) => (
    <tr key={NxvUser.id}>
      <td>{NxvUser.id}</td>
      <td>{NxvUser.Nxv_name}</td>
      <td>{NxvUser.Nxv_email}</td>
      <td>{NxvUser.Nxv_phone}</td>
      <td>
        <span
          className={`badge ${
            NxvUser.Nxv_active ? 'bg-success' : 'bg-danger'
          }`}
        >
          {NxvUser.Nxv_active ? 'Hoạt động' : 'Khóa'}
        </span>
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            className="btn btn-primary btn-sm me-2"
            onClick={() => NxvHandleUpdate(NxvUser.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => NxvHandleDelete(NxvUser.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Danh sách User</h2>

      {/* Custom Alert */}
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

      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
          <p>Đang tải...</p>
        </div>
      ) : NxvListUser.length === 0 ? (
        <p className="text-center text-muted fst-italic">Không có dữ liệu để hiển thị.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-light">
              <tr>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{NxvElementUser}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}