import React, { Component } from 'react'
import NqtEventForm1 from './components/nqtEventForm1' // Need to import the component
import NqtEventForm2 from './components/nqtEventForm2' // Need to import the component
import NqtEventForm3 from './components/nqtEventForm3' // Need to import the component
import NqtEventForm4 from './components/nqtEventForm4'
import NqtEventForm5 from './components/nqtEventForm5'
export default class NqtApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        {/* <NqtEventForm1/> 
        <hr />
        <NqtEventForm2/>
        <NqtEventForm3/>
        <NqtEventForm4/> */}
        <NqtEventForm5/>
      </div>
    )
  }
}