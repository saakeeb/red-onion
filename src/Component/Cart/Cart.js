import React from 'react';

const Cart = (props) => {
    const cart = props.cart; 
    console.log(cart, 'cart');
    const totalPrice = cart.reduce (( total, prd)=>total+prd.price,0)

    let total = 0;
    for(let i = 0 ; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    
    let shipping = 0 ;
    if(total>35 || totalPrice>35){
        shipping = 0;
    }
    else if(total>12 || totalPrice>12){
        shipping= 5.99;
    }
    else if(total>0 || totalPrice>0){
        shipping= 12.99;
    }
    const tax = Math.ceil(total/16.67);
    const grandTotal = (total + shipping + tax).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className="container-fluid">
            <h5>Order:{cart.length}</h5>
            <h6>Shipping Cost:{shipping}</h6>
            <h6>Product Tax:{tax}</h6>
            <h5>Price: {formatNumber(totalPrice)}</h5>
            <h5>Price: {formatNumber(total)}</h5>
            <h5>Total Price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;