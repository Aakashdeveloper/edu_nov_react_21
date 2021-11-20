import React,{Fragment,Component} from 'react';
import './header.css';

class Header extends Component {
    // first thing that get called
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Input Here'
        }
    }
   
    handleChange = (event) => {
        this.setState({keyword:event.target.value})
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white',fontSize:'15px'}}>{this.state.keyword}</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;