import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    conditionalRender = () => {
        if(this.state.user.role){
            if(this.state.user.role === "Admin"){
                return(
                    <Link to="/users" className="btn btn-success">
                        Users
                    </Link>
                )
            }
        }
    }

    render() {
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        sessionStorage.setItem('rtk',this.state.user.role)
        return (
            <div className="container">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        Profile
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your Email Id Is {this.state.user.email}</h2>
                        <h2>Your Phone Number Is {this.state.user.phone}</h2>
                        <h2>Your Role Is {this.state.user.role}</h2>
                    </div>
                    {this.conditionalRender()} &nbsp;
                    <button className="btn btn-danger" onClick={this.handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    // call api 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                user:data
            })
        })
    }
}

export default Profile;