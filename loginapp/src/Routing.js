import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Login from './component/login';
import Register from './component/Register';
import User from './component/UserApi';
import Profile from './component/Profile';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/users" component={User}/>
            <Route path="/profile" component={Profile}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;