import React from 'react'

export default function NxvRenderList() {
  const NxvNames = ['Vinh', 'Anh', 'Hiếu', 'Quân']
  const NxvElementName = NxvNames.map((item)=>{
    return (<li>{item}</li>)
  })
    return (
    <div>
        <h2>Danh sách</h2>
        {NxvElementName}
    </div>
  )
}
