import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter'

const url = "https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component {
    constructor(props){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter=(sortedData)=>{
        this.setState({hotellist:sortedData})
    }

    render(){
        return(
           <div id="mainListing">
               <div id="filter">
                   <center><h2>Filters</h2></center>
                   <hr/>
                   <RoomFilter roomPerType={(data) => {this.setDataPerFilter(data)}}/>
                   <hr/>
                   <CostFilter costPerType={(data) => {this.setDataPerFilter(data)}}/>
               </div>
               <div id="content">
                   <ListingDisplay listdata={this.state.hotellist}/>
               </div>

           </div>
        )
    }

    // call api on the basis of trip type 
    componentDidMount(){
        let tripId = this.props.match.params.id?this.props.match.params.id:1
        sessionStorage.setItem('tripid', tripId)
        axios.get(`${url}/${tripId}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }
}


export default Listing