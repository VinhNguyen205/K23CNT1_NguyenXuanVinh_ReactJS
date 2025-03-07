import logo from './logo.svg';
import loading from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={loading} className="App-logo" alt="logo2" />
        <h1 className="App-title">Infomation</h1>
        <p>Họ và tên: Nguyễn Xuân Vinh</p>
        <p>Mã sinh viên:  2310900117</p>
        <p>Ngày sinh: 30/06/2005</p>
        <p>Điện thoại: 0357335092*</p>
        <p>Tên lớp: K23CNT1</p>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
