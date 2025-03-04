import React from 'react'

export default function NqtFuncCom(props) {
  return (
    <div>
        <h2>Demo: Function Components Props</h2>
        <p>Lấy dữ liệu từ props để hiển thị</p>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Note: {props.note}</p>
        <p>Coutry: {props.coutry}</p>
        <p>Name: {props.name}</p>
    </div>
  )
}
