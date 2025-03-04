import React, { Component } from 'react'

export default class NqtClassCom extends Component {
    constructor(props){ // Thêm props ở đây
        super(props);
        // khởi tạo state
        this.state = {
            fullName: 'NqtClassCom',
            age: 20,
            phone: '0961138440'
        }
    }

    //hàm xử lý change
    changeInfo = (ev) => {
        this.setState({
            [ev.target.name]: "Nguyễn Nguyễn"
        })
    }

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Trình bày dữ liệu state</h2>
                <p>info: {this.state.fullName}</p>
            </div>
        )
    }
}
