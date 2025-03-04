import React, { Component } from 'react'
import NxvEventForm1 from './components/NxvEventForm1' // Need to import the component
import NxvEventForm2 from './components/NxvEventForm2' // Need to import the component
import NxvEventForm3 from './components/NxvEventForm3' // Need to import the component
import NxvEventForm4 from './components/NxvEventForm4'
import NxvEventForm5 from './components/NxvEventForm5'
export default class NxvApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        {/* <NxvEventForm1/> 
        <hr />
        <NxvEventForm2/>
        <NxvEventForm3/>
        <NxvEventForm4/> */}
        <NxvEventForm5/>
      </div>
    )
  }
}
