import React, { Component } from 'react';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CommonMenu from "./components/menu/CommonMenu";

class Main extends Component{
    render(){
        return (
            <div>
                <Header/>
                <CommonMenu/>
                <Footer/>
            </div>
        )
    }
}

export default Main;