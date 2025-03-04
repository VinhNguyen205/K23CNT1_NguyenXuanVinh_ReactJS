// import React, { Component } from 'react'

// export default class NqtClassComState extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             NqtFullName: 'NguyenQuangTam',
//             NqtAge: 20,
//         }
//     }
//     //hàm xử lý sự kiện
//     nqtEventHandleClick1 = () => {
//         alert("FullName: "+this.state.NqtFullName + "\nAge: "+this.state.NqtAge)
//     }
//     render() {
//         return (
//         <div className='alert alert-info'>
//             <button className='btn btn-success' onclick={this.nqtEventHandleClick1}>
//                 Button 1 - Dữ liệu từ trong statement
//             </button>
//             <p>FullName
//                 <input onChange={this.nqtEventHandleChange}>
//                 </input>
//             </p>
//         </div>
//         )
//     }
// }

import React, { Component } from 'react'

export default class NqtClassComState extends Component {
    constructor(props){
        super(props);
        this.state = {
            NqtFullName: 'NguyenQuangTam',
            NqtAge: 20,
        }
    }
    //hàm xử lý sự kiện
    nqtEventHandleClick1 = () => {
        alert("FullName: "+this.state.NqtFullName + "\nAge: "+this.state.NqtAge)
    }
    render() {
        return (
        <div className='alert alert-info'>
            <button className='btn btn-success' onClick={this.nqtEventHandleClick1}>
                Button 1 - Dữ liệu từ trong statement
            </button>
            <p>FullName
                <input onChange={this.nqtEventHandleChange}>
                </input>
            </p>
        </div>
        )
    }
}
