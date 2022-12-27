import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart()
        // console.log(storedCart)
        const savedCart = []
        for (const id in storedCart) {
            // console.log(id)
            const addededProduct = products.find(product => product.id === id)
            if (addededProduct) {
                const quantity = storedCart[id]
                addededProduct.quantity = quantity
                savedCart.push(addededProduct)
            }
            setCart(savedCart)
            // console.log(addededProduct)
        }
    }, [products])



    const [cart, setCart] = useState([])
    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exist = cart.find(product => product.id === selectedProduct.id)
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, selectedProduct]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;