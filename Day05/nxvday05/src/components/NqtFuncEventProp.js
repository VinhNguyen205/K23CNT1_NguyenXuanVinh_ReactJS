import React from 'react'


export default function NqtFuncEventProp(props) {
    const nqtHandleButton1Click = ()=>{
        alert("Dữ liệu lấy từ props: "+ props.nqtRenderName)
    }
    const nqtHandleButton2Click  = ()=>{
        alert("Dữ liệu lấy từ props: "+ props.nqtRenderName)
    }
    return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary mx-1'
            onClick={nqtHandleButton1Click}>button 1
            </button>
            <button className='btn btn-success mx-1'
            onClick={()=>this.nqtHandleButton2Click('button 2')}>button 2
            </button>
        </div>
    )
}
