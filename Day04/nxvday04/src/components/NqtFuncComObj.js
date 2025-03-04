import React from 'react'

export default function NqtFuncComObj(nqtProps) {
return (
    <div>
      <h2>Props is Object</h2>
      <p>
        <b>
        Info:
        </b>
      </p>
      <p>FullName: {nqtProps.RenderInfo.fullName}</p>
      <p>Age: {nqtProps.RenderInfo.age}</p>
      <p>Note: {nqtProps.RenderInfo.note}</p>
    </div>
  )
}
