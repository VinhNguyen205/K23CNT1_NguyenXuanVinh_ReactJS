import { useRef } from 'react';
import './App.css';
import NxvClassCom from './components/NxvClassCom';
import NxvFuncCom from './components/NxvFuncCom';
import NxvFuncComObj from './components/NxvFuncComObj';

function NxvApp() {
  const user = {
    fullName: "Nguyễn Xuân Vinh",
    age: 20,
    note: "acc"
  }

  const classComRef = useRef(); // Tạo ref để tham chiếu đến NqtClassCom

  return (
    <div className="container mt-3 border">
      <h1>Demo</h1>
      <hr />
      <div className="alert alert-danger">
        <NxvFuncCom name="Nguyễn Xuân Vinh" age="20" note="acc"></NxvFuncCom>
      </div>
      <hr />
      <NxvFuncCom name="Test Subject"></NxvFuncCom>
      <div className="alert alert-info">
        <NxvFuncComObj RenderInfo={user}></NxvFuncComObj>
      </div>
      
      <NxvClassCom ref={classComRef}></NxvClassCom>

      <hr />
      <button className="btn btn-success" onClick={() => classComRef.current.changeInfo({ target: { name: 'fullName' } })}>
        Change
      </button>
    </div>
  );
}

export default NxvApp;
