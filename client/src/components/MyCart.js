import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

export default class MyCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };
    }

    componentDidMount() {
        this.retrievecartItems();
    }

    retrievecartItems() {
        axios.get("/cart/display").then(res => {
            if (res.data.success) {
                this.setState({
                    cartItems: res.data.existingcartItems
                });

                console.log(this.state.cartItems)

            }


        });
    }

    onDelete = (id) => {
        axios.delete(`/cart/delete/${id})`).then((res) => {
            toast.success('Order Deleted successfully', { position: toast.POSITION.TOP_CENTER })
            this.retrievecartItems();
        })
    }








    render() {
        return (
            <div className="">
                <NavBar />
                <p>My Cart</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.cartItems.map((cartItems, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{cartItems.productImage}</td>
                                <td>{cartItems.productName}</td>
                                <td>{cartItems.productPrice}</td>
                                <td>{cartItems.quantity}</td>
                                <td>{cartItems.totalPrice}</td>
                                <td>
                                    <a className="btn btn-warning" href="/store">
                                        <i className="fas fa-sync-alt"></i>&nbsp;Update
                                    </a>
                                    &nbsp;
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(cartItems._id)}>
                                        <i className="far fa-times-circle"></i>&nbsp;Remove
                                    </a>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>


                <div class="container">
                    <a href="/" >
                        <button className="btn btn-success">Continue Shopping</button>
                    </a>
                </div>
                &nbsp;
                <div class="container">
                    <a href="#">
                        <button className="btn btn-success">Proceed To Deliver</button>
                    </a>
                </div>

            </div>

        )
    }
}