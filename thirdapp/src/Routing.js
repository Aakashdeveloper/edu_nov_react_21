import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/details/details';
import PlaceBooking from './component/booking/placeBooking';
import ViewBooking from './component/booking/viewBookingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;