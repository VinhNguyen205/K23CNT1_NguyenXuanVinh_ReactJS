import React, { Component } from 'react'

export default class NxvEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: 'css' // Giá trị default là 'css' như trong hình
        }
    }

    // Hàm xử lý khi giá trị trong select thay đổi
   NxvHandleChange = (event) => {
        this.setState({ course: event.target.value });
    }

    // Hàm xử lý khi form được submit
    NxvHandleSubmit = (event) => {
        event.preventDefault(); // Ngăn form reload trang
        alert(`Khóa học bạn đã chọn: ${this.state.course}`);
    }

    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form select</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Chọn khóa học: </label>
                        <select 
                            value={this.state.course} 
                            onChange={this.NxvHandleChange}
                            className='form-control'
                        >
                            <option value="css">CSS</option>
                            <option value="html">HTML</option>
                            <option value="js">JavaScript</option>
                        </select>
                    </div>
                    <button 
                        type='submit' 
                        className='btn btn-primary mt-2'
                        onClick={this.NxvHandleSubmit}
                    >
                        Click
                    </button>
                </form>
            </div>
        )
    }
}
