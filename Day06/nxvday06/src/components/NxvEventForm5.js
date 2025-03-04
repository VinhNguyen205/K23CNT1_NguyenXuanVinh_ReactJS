import React, { Component } from "react";

class NqtEventForm5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nqtFullname: "",
      nqtAge: "",
      nqtGender: "Nam",
      nqtCourse: "ReactJS",
    };
  }

  nqtHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  nqtHandleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Họ tên: ${this.state.nqtFullname}\nTuổi: ${this.state.nqtAge}\nGiới tính: ${this.state.nqtGender}\nKhóa học: ${this.state.nqtCourse}`
    );
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="card p-4">
          <h2 className="text-center mb-3">Form Nhập Thông Tin Học Sinh</h2>
          <form onSubmit={this.nqtHandleSubmit}>
            {/* Họ tên */}
            <div className="mb-3">
              <label className="form-label">Họ tên:</label>
              <input
                type="text"
                name="nqtFullname"
                value={this.state.nqtFullname}
                onChange={this.nqtHandleChange}
                className="form-control"
                required
              />
            </div>

            {/* Tuổi */}
            <div className="mb-3">
              <label className="form-label">Tuổi:</label>
              <input
                type="number"
                name="nqtAge"
                value={this.state.nqtAge}
                onChange={this.nqtHandleChange}
                className="form-control"
                required
              />
            </div>

            {/* Giới tính */}
            <div className="mb-3">
              <label className="form-label">Giới tính:</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="nqtGender"
                    value="Nam"
                    checked={this.state.nqtGender === "Nam"}
                    onChange={this.nqtHandleChange}
                    className="form-check-input"
                    id="nqtNam"
                  />
                  <label className="form-check-label" htmlFor="nqtNam">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="nqtGender"
                    value="Nữ"
                    checked={this.state.nqtGender === "Nữ"}
                    onChange={this.nqtHandleChange}
                    className="form-check-input"
                    id="nqtNu"
                  />
                  <label className="form-check-label" htmlFor="nqtNu">Nữ</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    name="nqtGender"
                    value="Khác"
                    checked={this.state.nqtGender === "Khác"}
                    onChange={this.nqtHandleChange}
                    className="form-check-input"
                    id="nqtOther"
                  />
                  <label className="form-check-label" htmlFor="nqtOther">Khác</label>
                </div>
              </div>
            </div>

            {/* Khóa học */}
            <div className="mb-3">
              <label className="form-label">Khóa học:</label>
              <select
                name="nqtCourse"
                value={this.state.nqtCourse}
                onChange={this.nqtHandleChange}
                className="form-select"
              >
                <option value="ReactJS">ReactJS</option>
                <option value="NodeJS">NodeJS</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Gửi Thông Tin
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NqtEventForm5;
