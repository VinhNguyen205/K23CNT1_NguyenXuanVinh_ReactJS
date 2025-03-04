import React, { Component } from 'react'

export default class NqtClassEvent extends Component {
    //hàm xử lý sự kiện
    nqtEventHandleClick1 = ()=>{
        alert('Button 1 clicked');
    }
    nqtEventHandleClick2 = (name)=>{
        alert('Button 2 clicked; Name: ' + name);
    }
    render() {
        return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary mx-1' onClick={this.nqtEventHandleClick1}>Button 1</button>
            <button className='btn btn-success mx-2'
            onClick={()=>this.nqtEventHandleClick2('Nguyễn Quang Tâm')}>Button 2</button>
        </div>
        )
    }
}
