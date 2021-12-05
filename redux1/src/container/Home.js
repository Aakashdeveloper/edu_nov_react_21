import React, {Component} from 'react';
import {connect} from 'react-redux'
import {moviesList} from '../actions/actionFile';
import DisplayComponent from '../component/DisplayComponent';

class Home extends Component{
    // call action 
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
                <DisplayComponent datalist={this.props.myData}/>
            </div>
        )
    }
 
}

// here  we will receive the updated state from store
function mapStateToProps(state){
    return{
        myData:state.films
    }
}


export default connect(mapStateToProps)(Home)