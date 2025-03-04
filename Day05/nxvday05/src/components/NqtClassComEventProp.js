import React, { Component } from 'react'

export default class NqtClassComEventProp extends Component {
    
    nqtEventHandleClick =() => {
        alert('xin chào ' + this.props.nqtRenderTitle);
    }
    render() {
        return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.nqtEventHandleClick}>
                Button 1
            </button>
        </div>
        )
    }
}
