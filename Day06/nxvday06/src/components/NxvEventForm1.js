import React, { Component } from 'react'

export default class NxvEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nqtStudentName: 'Nguyễn Xuân Vinh'
        }
    }
    //hàm xử lý sự kiện khi dữ liệu thay đổi
    NxvHandleChange = (event)=>{
        this.setState({NxvStudentName: event.target.value});
    }
    //khi submit form lấy dữ liệu và hiển thị 
    NxvHandleSubmit = (ev) =>{
        alert('xin chào ' + this.state.NxvStudentName);
        ev.preventDefault(); //tạm ngưng submit form và giữ lại trang web
    }
    render() {
        return (
        <div className='alert alert-info'>
            <h2>Form input</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='NxvStudentName'></label>
                    <input type='text' name='NxvStudentName' id ='NxvStudentName'
                    value={this.state.NxvStudentName} onChange={this.NxvHandleChange}/>
                </div>
                <button type='submit' className='btn btn-primary' onClick={this.NxvHandleSubmit}>Click</button>
            </form>
        </div>
        )
    }
}
