import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json'

class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            products:JSON
        }
    }
    render(){
        //console.log(this.state.products)
        return(
            <React.Fragment>
                <Header/>
                <ProductDisplay prodData={this.state.products}/>
                <Footer year="2022" month="Nov"/>
            </React.Fragment>
        )
    }
}

export default Home