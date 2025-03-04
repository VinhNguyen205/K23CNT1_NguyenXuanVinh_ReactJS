import React, { Component } from 'react';
import NxvLoginControl from './NxvLoginControl';

class NxvRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    NxvHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    NxvHandleLogout = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:false
        })
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <NxvLoginControl isLoggedIn={this.state.isLoggedIn} />

                {
                    this.state.isLoggedIn ?
                        <button className='btn btn-danger' onClick={this.NxvHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.NxvHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NxvRenderCondition;