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
        if(this.props.location){
            var qparams = this.props.location.search;
            if(qparams){
                var data ={
                    "status":qparams.split('&')[0].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                var id = qparams.split('&')[1].split('=')[1].split('_')[1]
                fetch(`${url}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        axios.get(`${url}`).then((res) => {this.setState({booking:res.data})})
    }
}

export default ViewBooking;