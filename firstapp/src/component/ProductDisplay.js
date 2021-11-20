import React from 'react';

const ProductDisplay = (props) => {
    
    const renderProduct = props.prodData.map((item) => {
        return(
            <div>
                <img src={item.image} style={{height:100,width:100}}/>
                <h2>{item.name}</h2>
                <p>{item.brand}</p>
            </div>
           
        )
    })

    return(
        <div>
           {renderProduct}
        </div>
    )
}

export default ProductDisplay