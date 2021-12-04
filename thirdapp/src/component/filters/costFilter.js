import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist"

class CostFilter extends Component {
    filterCost = (event) => {
        let tripId =  sessionStorage.getItem('tripid');
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl;
        if(event.target.value == ""){
            costUrl = `${url}/${tripId}`;
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`;
        }
        axios.get(costUrl)
            .then((response) => {this.props.costPerType(response.data)})
    }
    
    render(){
        return(
            <>
                <center><h3>Cost Filter</h3></center>
                <div style={{marginLeft:'12%'}} onChange={this.filterCost}>
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