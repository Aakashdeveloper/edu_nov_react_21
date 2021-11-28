import React,{Component} from 'react';

const url = "http://localhost:7111/booking"

class PlaceBooking extends Component {
    constructor(props) {
        super(props);

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:'Aakash',
            phone:'765675657',
            date:'',
            email:'aakash@gmail.com',
            cost: sessionStorage.getItem('cost')
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(url,
            {
                method: 'POST',
                headers:{
                    'accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))

    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Booking Id</label>
                                <input className="form-control" readOnly name="id"
                                value={this.state.id}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Hotel Name</label>
                                <input className="form-control" readOnly name="hotel_name"
                                value={this.state.hotel_name}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Cost</label>
                                <input className="form-control" readOnly name="cost"
                                value={this.state.cost}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Name</label>
                                <input className="form-control" name="name"
                                value={this.state.name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Phone</label>
                                <input className="form-control" name="phone"
                                value={this.state.phone} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input className="form-control" name="email"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Date</label>
                                <input className="form-control" name="date" type="date"
                                value={this.state.date} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>
                            Place Booking
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;