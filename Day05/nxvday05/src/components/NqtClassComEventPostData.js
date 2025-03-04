import React, { Component } from 'react'

export default class NqtClassComEventPostData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'abc'
        }
    }
    nqtEventHandleClick = (event) => {
        this.props.onNqtEventHandleClick("Dữ liệu từ component")
    }
    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary' onClick={this.nqtEventHandleClick}>
                    Button 1 - Chuyển dữ liệu lên app
                </button>
            </div>
        )
    }
}
