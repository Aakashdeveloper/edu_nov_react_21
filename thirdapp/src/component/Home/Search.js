import React,{ Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const lurl = "https://developerfunnel.herokuapp.com/location";
const curl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {

    constructor(){
        super()

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const CityId = event.target.value;
        fetch(`${curl}${CityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({hotels:data})})
    }

    handleHotel =(event) => {
        this.props.history.push(`/details/${event.target.value}`)
    }


    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT LOCATION-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown" onChange={this.handleHotel}>
                        <option>-------SELECT HOTEL--------</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    /// on page load call api   
    componentDidMount(){
        // we get the data and update the state
        fetch(lurl, {method:'GET'})
        // return the promise object
        .then((res) => res.json())
        // return the data
        .then((data) => {
            // set the data in the state
            this.setState({location:data})
        })
        .catch((err) => {console.log(err)})
    }
}
    
export default withRouter(Search)