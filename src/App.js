import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import customAxios from './customAxios';

// function App(){
//   return(
//     <Router>
//       <div className="App">
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">홈</Link>
//             </li>
//             <li>
//               <Link to="/about">소개</Link>
//             </li>
//             <li>
//               <Link to="/users">사용자</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <Switch>
//         <Route path="/about">
//           <About/>
//         </Route>
//         <Route path="/users">
//           <Users/>
//         </Route>
//         <Route path="/">
//           <Home/>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

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
// function About() {
//   return (
//     <div>
//       <hr />
//       <h2>소개 페이지</h2>
//     </div>
//   );
// }

// function Users() {
//   return (
//     <div>
//       <hr />
//       <h2>사용자 페이지</h2>
//     </div>
//   );
}
export default App;