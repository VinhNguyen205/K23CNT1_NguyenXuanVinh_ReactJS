import './App.css';
import NxvRenderCondition from './components/NxvRenderCondition';
import NxvRenderList from './components/NxvRenderList';
import NxvRenderListStudent from './components/NxvRenderListStudent';
// import NxvRenderCondition from 'components/NxvRenderCondition';

function NxvApp() {
  return (
    <div className="App">

      <NxvRenderCondition/>
      <hr />
      <div className='alert alert-info'>
        <NxvRenderList/>
      </div>
      <hr />
      <NxvRenderListStudent/>
    </div>
  );
}

export default NxvApp;
