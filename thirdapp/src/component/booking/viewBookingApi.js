import React, {Component} from 'react';
import axios from 'axios';
import BookingDisplay from './viewBookingDisplay';

const url = "http://localhost:7111/booking"

class ViewBooking extends Component {
    constructor(props) {
        super(props);

        this.state={
            booking:''
        }
    }
    render(){
        return(
           <div>
               <BookingDisplay bookdata={this.state.booking}/>
           </div>
        )
    }


    // api call to get all booking 
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking;