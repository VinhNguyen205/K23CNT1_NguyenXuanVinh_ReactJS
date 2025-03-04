import { useRef } from 'react';
import './App.css';
import NqtClassCom from './components/NqtClassCom';
import NqtFuncCom from './components/NqtFuncCom';
import NqtFuncComObj from './components/NqtFuncComObj';

function NqtApp() {
  const user = {
    fullName: "Nguyễn Quang Tâm",
    age: 20,
    note: "abcccc"
  }

  const classComRef = useRef(); // Tạo ref để tham chiếu đến NqtClassCom

  return (
    <div className="container mt-3 border">
      <h1>Demo</h1>
      <hr />
      <div className="alert alert-danger">
        <NqtFuncCom name="Nguyễn Quang Tâm" age="20" note="bca"></NqtFuncCom>
      </div>
      <hr />
      <NqtFuncCom name="Nguyễn Ngọc Hiếu"></NqtFuncCom>
      <div className="alert alert-info">
        <NqtFuncComObj RenderInfo={user}></NqtFuncComObj>
      </div>
      
      <NqtClassCom ref={classComRef}></NqtClassCom>

      <hr />
      <button className="btn btn-success" onClick={() => classComRef.current.changeInfo({ target: { name: 'fullName' } })}>
        Change
      </button>
    </div>
  );
}

export default NqtApp;
