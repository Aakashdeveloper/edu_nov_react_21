import React from 'react';

import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderList = ({listdata}) => {
        if(listdata){
            if(listdata.length>0){
                return(
                    <h1>data</h1>
                )
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