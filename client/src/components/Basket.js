import '../index.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 150 && itemsPrice < 100 ? 50 : 150;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;





    // addcartItems(){
    //     axios.post(/cart/add).then(res=>{
    //         if(res.data.success){

    //         }
    //     })

    // }




    return (
        <aside className="">
            <h2>YOUR BASKET</h2>
            <h6>
                <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-6">{item.name}</div>
                        <div className="col-2">
                            <i class="fas fa-minus-circle" onClick={() => onRemove(item)}></i>&nbsp;
                            <i class="fas fa-plus-circle" onClick={() => onAdd(item)}></i>
                        </div>
                        <div className="col-3 text-right">
                            {item.qty} x RS.{item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </h6>

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <h6>
                        <div className="row">
                            <div className="col-8">Items Price</div>
                            <div className="col-3 text-right">RS.{itemsPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Tax Price</div>
                            <div className="col-3 text-right">RS.{taxPrice.toFixed(2)}</div>
                        </div>
                        <div className="row">
                            <div className="col-8">Shipping Price</div>
                            <div className="col-3 text-right">RS.{shippingPrice.toFixed(2)}</div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-8"><strong>Total Price</strong></div>
                            <div className="col-3"><strong>RS.{totalPrice.toFixed(2)}</strong></div>
                        </div>
                        <hr></hr>
                        <a href="#">
                            <div className="d-grid gap-2">
                                <Button varient="primary">Add to My Orders</Button>
                            </div>
                        </a>
                        &nbsp;
                        <a href="/mycart">
                            <div className="d-grid gap-2">
                                <Button variant="primary">View My Orders</Button>
                            </div>
                        </a>
                    </h6>
                </>
            )}

        </aside>
    );

}
