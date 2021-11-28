import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './details.css'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component {
    constructor(props) {
        super(props)

        this.state={
            details:'',
            tripId:sessionStorage.getItem('tripid')
        }
    }

    render(){
        //let details = this.state.details
        let {details} = this.state
        return(
            <div className="main">
                <div className="tileImage">
                    <div className="imageClass">
                        <img src={this.state.details.thumb}/>
                    </div>
                </div>
                <div className="tileContent">
                    <div className="content">
                        <h1>{details.name}</h1>
                        <span id="cfeedback">231 Customers Rating</span> 
                        <h4>Old Price: <strike>Rs 10000</strike></h4>
                        <h3>New Price: Rs {details.cost}</h3>
                        <h3>We Provide The Best Service</h3>
                        <div>
                            <div className="icons">
                                <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png"/>
                                <p>FullY Sentizied</p>
                            </div>
                            <div className="icons">
                                <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png"/>
                                <p>Food Delivery Available</p>
                            </div>
                           
                        </div>
                        <Tabs>
                            <TabList>
                                <Tab>Description</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Rooms</Tab>
                            </TabList>
                            <TabPanel>
                                <p>
                                {details.name} is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>Ph Number:7867577657</p>
                            </TabPanel>
                            <TabPanel>
                                <h4>Any content 3</h4>
                            </TabPanel>
                        </Tabs>
                        <div id="section2">
                            <p id="stock">Available</p>
                            <div>
                                <Link to={`/list/${this.state.tripId}`} className="button btn btn-danger">Back</Link> &nbsp;
                                <Link to={`/booking/${details.name}`} className="button btn btn-success">Checkout</Link>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }

     // call api on the basis of trip type (es6 promise)
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({details:response.data[0]})
        sessionStorage.setItem('cost',response.data[0].cost)
    }

}

export default Details