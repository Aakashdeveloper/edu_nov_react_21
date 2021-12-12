import React, {Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';
import {Link} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/users"

class UserApi extends Component {
    constructor(props) {
        super(props);

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
        return(
           <div>
               <Link to="/profile" className="btn btn-success">
                        Profile
                </Link>
               <UserDisplay userdata={this.state.users}/>
           </div>
        )
    }


    // api call to get all booking 
    componentDidMount(){
        axios.get(`${url}`).then((res) => {this.setState({users:res.data})})
    }
}

export default UserApi;