import React from 'react';

const DisplayComponent = (props) => {
    const renderMovies = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h3>Movies</h3>
            {renderMovies(props)}
        </div>
    )
}

export default DisplayComponent