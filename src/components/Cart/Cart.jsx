import React, { useEffect } from 'react'
import axios from 'axios';
import './Cart.css'
import { Button } from '@mui/material';
const Cart = () => {
    const [products, setProducts] = React.useState([])
    const getdata = async () => {
        try {
            const responsep = await axios.get('http://localhost:3001/products')
            setProducts(responsep.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getdata();
    },[]);
  return (
    <div>
        {
            products.map((product) => {
                if(product.quantity > 0){
                    const total = Number(product.price) * Number(product.quantity);
                    return(
                        <div className="cart">
                            <div className="cart-img">
                                <img src={product.image} alt=""/>
                            </div>
                            <div className="cart-details">
                                <h2>{product.name}</h2>
                                <h2>${product.price}</h2>
                                <h2>{product.quantity}</h2>
                                <h2>${total}</h2>
                            </div>
                            <div className='remove-cart'>
                                <Button variant='contained' color='primary'>Remove</Button>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div>
                        </div>
                    )
                }
            })
        }
    </div>
  )
}

export default Cart