import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import customAxios from './customAxios';
import { BrowserRouter as Rotuer, Route } from 'react-router-dom';

import Main from "../pages/Main";
import StockHome from "../pages/StockHome";
import Viewer from "../pages/Viewer";
import { render } from 'react-dom';
import React,{ Component } from 'react';
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

class App extends Component {
    render(){

        return (
          <Router>
              <div>
                {App}
                <Route exact path="/" component={Main}/>
                <Route path="/stock/:stockId" component={StockHome}/>
                <Route patch="/viewer/:viewerid" component={Viewer}/>
              </div>
          </Router>
        );
    }

  }
}
    export default App;