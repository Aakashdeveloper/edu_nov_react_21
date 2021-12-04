import React from 'react';

function DisplayComponent(props){

    const renderList = ({myCity}) => {
        if(myCity){
            return myCity.map((item) => {
                return(
                    <div key={item._id}>
                        <h2>{item.city_name}</h2>
                    </div>
                )
            })
        }
    }

    return(
        <div>
            <center>
                <h2>City List</h2>
                {renderList(props)}
            </center>
        </div>
    )
}

export default DisplayComponent