import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component {
   
    
    render(){
        return(
            <>
                <center><h3>Cost Filter</h3></center>
                <div style={{marginLeft:'12%'}}>
                    <label className="radio">
                        <input type="radio" name="room" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="100-3000"/>1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="3001-6000"/>3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="6001-9000"/>6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="9001-15000"/>9001-15000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilter