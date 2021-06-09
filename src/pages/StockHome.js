import React, { Component } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Component from "../components/CommonMenu";

class StockHome extends Component{
    render(){
        return (
            <div>
                <Header/>
                <CommonMenu/>
                StockHome
                <Footer/>
            </div>
        )
    }
}

export default StockHome;