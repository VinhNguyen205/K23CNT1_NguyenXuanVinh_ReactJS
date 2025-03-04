import React from 'react'


export default function NqtFuncEvent() {
    const nqtEventButton1Click = ()=>{
        alert('Button 1 Clicked');
        console.log('Button 1 Clicked');
    }
    const nqtEventButton2Click = ()=>{
        alert('Button 2 Clicked');
        console.log('Button 2 Clicked');
    }
    const nqtEventButton3Click  = (name)=>{
        alert("Name: "+name);
    }
    return (
    <div className='alert alert-danger'>
        {/* <button className='btn btn-primary' onClick={nqtEventButton1Click()}>Button 1</button>  */}
        <button className='btn btn-success' onClick={nqtEventButton2Click}>Button 2</button>
        {/* <button className='btn btn-success' onClick={nqtEventButton3Click('Nguyễn Quang Tâm')}>Button 3</button> */}
        <button className='btn btn-success' onClick={()=>nqtEventButton3Click('Nguyễn Quang Tâm')}>Button 4</button>
    </div>  
    )
}
