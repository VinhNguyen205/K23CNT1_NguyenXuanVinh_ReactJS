import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NxvListUsers from './components/NxvListUsers'
import NxvNavBar from './components/NxvNavBar'
import NxvHome from './components/NxvHome'
import NxvCreateUser from './components/NxvCreateUser'
import NxvEditUser from './components/NxvEditUser'

export default function NxvApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1 className='text-center'>Nguyễn Xuân Vinh - Mini Project</h1>
      <Router >
          <NxvNavBar />
          <hr/>
          <Routes>
            <Route path='/' element={<NxvHome></NxvHome>} />
            <Route path='/list-user' element={<NxvListUsers />} />
            <Route path='/create-user' element={<NxvCreateUser />} />
            <Route path='/edit-user/:id' element={<NxvEditUser />} />
          </Routes>
      </Router>
        
    </div>
  )
}