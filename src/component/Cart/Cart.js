import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart)
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = parseFloat((total * .1).toFixed(2));
    // console.log(typeof tax)
    const grandTotal = parseFloat((total + shipping + tax).toFixed(3));
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item:{quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;