import React from 'react';
import './Product.css'

const ProductDisplay = (props) => {
    
    const renderProduct = props.prodData.map((item) => {
        return(
            <div className="card" key={item.id}>
                <img src={item.image} style={{height:100,width:100}}/>
                <h2>{item.name}</h2>
                <p>{item.brand}</p>
            </div>
           
        )
    })

    return(
        <div className="mainDiv">
           {renderProduct}
        </div>
    )
}

export default ProductDisplay