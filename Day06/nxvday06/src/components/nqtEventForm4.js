import React, { Component } from 'react';

class NqtEventForm4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nqtSelectBox: [] // Mảng để lưu các sở thích được chọn
        };
    }

    // Xử lý khi checkbox thay đổi
    nqtHandleChange = (event) => {
        const hobby = event.target.value;
        const isChecked = event.target.checked;
        
        if (isChecked) {
            // Thêm sở thích nếu được chọn
            this.setState(prevState => ({
                nqtSelectBox: [...prevState.nqtSelectBox, hobby]
            }));
        } else {
            // Xóa sở thích nếu bị bỏ chọn
            this.setState(prevState => ({
                nqtSelectBox: prevState.nqtSelectBox.filter(item => item !== hobby)
            }));
        }
    }

    // Xử lý khi form được submit
    nqtHandleSubmit = (event) => {
        event.preventDefault(); // Ngăn form reload trang
        alert(`Các sở thích bạn chọn: ${this.state.nqtSelectBox.join(', ')}`);
    }

    render() {
        return (
            <div className='alert alert-success p-4'>
                <h2 className='text-center mb-3'>Form input - checkbox</h2>
                <form onSubmit={this.nqtHandleSubmit}>
                    <div className='form-group'>
                        <label className='font-weight-bold'>Chọn sở thích:</label>
                        <div className='mt-2'>
                            <div className='form-check'>
                                <input 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value="Đọc sách" 
                                    id="docSach"
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="docSach" className='form-check-label'>
                                    Đọc sách
                                </label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value="Chơi thể thao" 
                                    id="choiTheThao"
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="choiTheThao" className='form-check-label'>
                                    Chơi thể thao
                                </label>
                            </div>
                            <div className='form-check'>
                                <input 
                                    type="checkbox" 
                                    name="hobbies" 
                                    value="Âm nhạc" 
                                    id="amNhac"
                                    onChange={this.nqtHandleChange}
                                    className='form-check-input'
                                />
                                <label htmlFor="amNhac" className='form-check-label'>
                                    Âm nhạc
                                </label>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className='btn btn-success mt-3'
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default NqtEventForm4