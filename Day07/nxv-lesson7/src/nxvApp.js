// import React from 'react'
import NxvLoginComp from './NxvLoginComp'
import NxvLogoutComp from './NxvLogoutComp'

export default function NxvLoginControl(props) {
    const nxvElement = props.isLoggedIn ? <NxvLoginComp /> : <NxvLogoutComp />

    // const NxvLogin = ()=>{
    //     if(props.isLoggedIn)
    //         return <NxvLogoutComp />
    //     else
    //         return <NxvLoginComp />
    // }

  return (
    <div>
      {nxvElement}
    </div>
  )
}
