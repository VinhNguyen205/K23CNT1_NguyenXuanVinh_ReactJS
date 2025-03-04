import React, { Component } from 'react'

export default class NxvClassCom extends Component {
    constructor(props){ // Thêm props ở đây
        super(props);
        // khởi tạo stat
        this.state = {
            fullName: 'NxvClassCom',
            age: 20,
            phone: '035733xxxx'
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
