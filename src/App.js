import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ip, setIp] = useState('');
  
  function callback(data){
    setIp(data);
  }

  useEffect(
    () => {
      customAxios('/ip', callback);
    }, []
  );

  return (
    <div className="App">
      <header className="App-header">
        이 기기의 IP주소는 {ip}입니다.
      </header>
    </div>
  );
}

export default App;