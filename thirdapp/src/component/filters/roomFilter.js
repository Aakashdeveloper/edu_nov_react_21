import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class RoomFilter extends Component {
    filterRoom = (event) => {
        let roomId = event.target.value;
        let tripId =  sessionStorage.getItem('tripid')
        let roomUrl;
        if(roomId === ""){
            roomUrl = `${url}/${tripId}`
        }else{
            roomUrl = `${url}/${tripId}?roomtype=${roomId}`
        }
        axios.get(roomUrl)
        .then((res) => {this.props.roomPerType(res.data)})
    }
    
    render(){
        return(
            <>
                <center><h3>Room Filter</h3></center>
                <div style={{marginLeft:'12%'}} onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" name="room" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="1"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="2"/>Premium Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="3"/>Travel Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="4"/>Semi Deluxe Room
                    </label>
                </div>
            </>
        )
    }
}

export default RoomFilter