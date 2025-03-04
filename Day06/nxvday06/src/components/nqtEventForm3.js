import React, { Component } from 'react';

class NqtEventForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 'Nam' // Giá trị mặc định là 'Nam'
        };
    }

    // Xử lý khi giá trị radio thay đổi
    nqtHandleChange = (event) => {
        this.setState({ gender: event.target.value });
    }

    // Xử lý khi form được submit
    nqtHandleSubmit = (event) => {
        event.preventDefault(); // Ngăn form reload trang
        alert(`Giới tính bạn chọn: ${this.state.gender}`);
    }

    render() {
        return (
            <div className='alert alert-danger p-4'>
                <h2 className='text-center mb-3'>Form input - radio</h2>
                <form onSubmit={this.nqtHandleSubmit}>
                    <div className='form-group'>
                        <label className='font-weight-bold'>Giới tính:</label>
                        <div className='mt-2'>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    name="nqtGioiTinh" 
                                    value="Nam" 
                                    id="nqtNam"
                                    checked={this.state.gender === 'Nam'}
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="nqtNam" className='form-check-label'>
                                    Nam
                                </label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    name="nqtGioiTinh" 
                                    value="Nữ" 
                                    id="nqtNu"
                                    checked={this.state.gender === 'Nữ'}
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="nqtNu" className='form-check-label'>
                                    Nữ
                                </label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="radio" 
                                    name="nqtGioiTinh" 
                                    value="Khác" 
                                    id="nqtKhac"
                                    checked={this.state.gender === 'Khác'}
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="nqtKhac" className='form-check-label'>
                                    Khác
                                </label>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className='btn btn-danger mt-3'
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NqtEventForm3;