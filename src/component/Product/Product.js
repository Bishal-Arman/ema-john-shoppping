import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props)
    const { handleAddToCart } = props;
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product img" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p className='price'>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small className='rating'>Rating: {ratings} star</small></p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text' onClick={() => handleAddToCart(props.product)}>Add To Cart</p>
                <p><FontAwesomeIcon icon={faShoppingCart} /></p>
            </button>

        </div>
    );
};

export default Product;