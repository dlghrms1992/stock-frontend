import React, { Component } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Component from "../components/CommonMenu";

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