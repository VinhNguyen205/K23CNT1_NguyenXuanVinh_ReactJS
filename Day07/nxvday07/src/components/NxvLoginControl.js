import React from 'react'
import NxvLoginCom from './NxvLoginCom'
import NxvLogoutCom from './NxvLogoutCom'

export default function TvcLoginControl(props) {
    const NxvElement = props.isLoggedIn ? <NxvLoginCom /> : <NxvLogoutCom />

    const NxvLogin = ()=>{
        if(props.isLoggedIn)
            return <NxvLogoutCom />
        else
            return <NxvLoginCom />
    }

  return (
    <div>
      {NxvLogin}
      {NxvElement}
    </div>
  )
}