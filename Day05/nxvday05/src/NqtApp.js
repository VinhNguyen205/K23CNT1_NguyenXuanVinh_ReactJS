import React, { Component } from 'react'
import NqtFuncEvent from './components/NqtFuncEvent'
import NqtClassEvent from './components/NqtClassEvent'
import NqtFuncEventProp from './components/NqtFuncEventProp'
import NqtClassComEventProp from './components/NqtClassComEventProp'
import NqtClassComState from './components/NqtClassComState'
import NqtClassComEventPostData from './components/NqtClassComEventPostData'

export default class NqtApp extends Component {
  //Hàm xử lý sự kiện khi components con chuyển dữ liệu lên
  constructor(props) {
    super(props);
    this.state = {
      nqtNoiDung: 'nội dung'
    }
  }
  nqtHandleDataToApp = (content) => {
    alert(content);
    this.setState({
      nqtNoiDung: content
    })
  }
  render() {
    return (
      <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'>K23CNT1- Nguyễn Quang Tâm - Event and Form</h1>
          <hr/>

          <NqtFuncEvent/>
          <hr/>
          <div>
            <NqtClassEvent/>
          </div>
          <hr/>
          <NqtFuncEventProp nqtRenderName='Nguyễn Quang Tâm'/>
          <hr/>
          <NqtClassComEventProp nqtRenderTitle = 'NQT'/>
          <hr/>
          <h1>Class components - event, state</h1>
          <NqtClassComState/>
          <hr/>
          <h1>

          </h1>
          <h1>{this.state.nqtNoiDung}</h1>
          <h2>Class components - event, post data to app</h2>
          <NqtClassComEventPostData onNqtEventHandleClick = {this.nqtHandleDataToApp} />
      </div>
      )
  }
}
