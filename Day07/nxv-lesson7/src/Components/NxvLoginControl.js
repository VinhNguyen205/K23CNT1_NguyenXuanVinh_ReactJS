import React, { Component } from 'react';
import NxvLoginControl from './NxvLoginControl';

export default class NxvRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nxvHandleLogin = (ev)=>{
        ev.preventDefault();
        this.setState({
            isLoggedIn:true
        })
    }
    // Hàm xử lý sự kiện logout
    nxvHandleLogout = (event)=>{
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
                        <button className='btn btn-danger' onClick={this.nxvHandleLogout} >Logout</button>
                        : <button className='btn btn-primary' onClick={this.nxvHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NxvRenderCondition;
