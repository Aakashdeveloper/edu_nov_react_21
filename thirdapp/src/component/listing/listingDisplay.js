import React from 'react';

import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderList = ({listdata}) => {
        if(listdata){
            if(listdata.length>0){
                return listdata.map((item) => {
                    return (
                            <div className="item" key={item._id}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <img className="Image" alt={item.name} src={item.thumb}/>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="hotel_name">
                                            <Link to={`/details/${item._id}`}>{item.name}</Link>
                                            <div className="city_name">{item.address}</div>
                                            <div className="city_name rating">Rs.{item.cost}</div>
                                            <div className="labelDiv">
                                                <span className="label label-primary">
                                                    {item.type[0].name}
                                                </span> &nbsp;
                                                <span className="label label-success">
                                                    {item.type[1].name}
                                                </span> &nbsp;
                                                <span className="label label-info">
                                                    {item.type[2].name}
                                                </span>
                                            </div>
                                            <div>
                                                <span className="label label-warning">
                                                    {item.tripType[0].name}
                                                </span> &nbsp;
                                                <span className="label label-danger">
                                                    {item.tripType[1].name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div>
                        <h2>No Data Found For This Filter</h2>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="/images/loader.gif" alt="loader"/>
                    <h3>Loading.....</h3>
                </div>
            )
        }
    }
    
    return(
        <div>
            {renderList(props)}
        </div>
    )
}

export default ListingDisplay;