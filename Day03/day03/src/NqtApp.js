import NqtClassCom from "./components/NqtClassCom";
import NqtExpression from "./components/NqtExpression";
import NqtFuncCom from "./components/NqtFuncCom";

function NqtApp() {
  return (
    <div className='container border mt-3'>
      <h1>Nguyễn Quang Tâm</h1>
      <NqtExpression />
      <hr/>
      <NqtFuncCom></NqtFuncCom>
      {/* sử dụng classcomponents */}
      <hr/>
      <NqtClassCom></NqtClassCom>
    </div>
  );
}

export default NqtApp;
