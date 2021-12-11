import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectedNews} from '../action/actionFile';

class NewsDisplay extends Component {
    //call action 
    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderDetails = ({selectednews}) => {
        if(selectednews){
            return selectednews.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:{data.author}</span>
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
               {this.renderDetails(this.props.datalist)}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        datalist:state.article
    }
}

export default connect(mapStateToProps)(NewsDisplay)