import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component {
    constructor(props){
        super()

        this.state={
            hotellist:''
        }
    }

    render(){
        return(
           <div id="mainListing">
               <div id="filter">
                   Filter
               </div>
               <div id="content">
                   <ListingDisplay listdata={this.state.hotellist}/>
               </div>

           </div>
        )
    }

    // call api on the basis of trip type 
    componentDidMount(){
        let tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }
}


export default Listing