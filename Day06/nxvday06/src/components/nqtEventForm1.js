import React, { Component } from 'react'

export default class nqtEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nqtStudentName: 'Nguyễn Quang Tâm'
        }
    }
    //hàm xử lý sự kiện khi dữ liệu thay đổi
    nqtHandleChange = (event)=>{
        this.setState({nqtStudentName: event.target.value});
    }
    //khi submit form lấy dữ liệu và hiển thị 
    nqtHandleSubmit = (ev) =>{
        alert('xin chào ' + this.state.nqtStudentName);
        ev.preventDefault(); //tạm ngưng submit form và giữ lại trang web
    }
    render() {
        return (
        <div className='alert alert-info'>
            <h2>Form input</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='nqtStudentName'></label>
                    <input type='text' name='nqtStudentName' id ='nqtStudentName'
                    value={this.state.nqtStudentName} onChange={this.nqtHandleChange}/>
                </div>
                <button type='submit' className='btn btn-primary' onClick={this.nqtHandleSubmit}>Click</button>
            </form>
        </div>
        )
    }
}
