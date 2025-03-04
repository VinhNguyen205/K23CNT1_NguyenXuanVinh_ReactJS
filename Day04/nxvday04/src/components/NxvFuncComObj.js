import React from 'react'
// test
export default function NxvFuncComObj(nxvProps) {
return (
    <div>
      <h2>Props is Object</h2>
      <p>
        <b>
        Info:
        </b>
      </p>
      <p>FullName: {nxvProps.RenderInfo.fullName}</p>
      <p>Age: {nxvProps.RenderInfo.age}</p>
      <p>Note: {nxvProps.RenderInfo.note}</p>
    </div>
  )
}
