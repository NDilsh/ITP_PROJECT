import '../index.css'
import Main from './Main';
import Basket from './Basket';
import data from '../data';
import { useState } from 'react';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'

function HomeCart() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }])
        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
            );
        }


    };





    return (

        <div className="HomeCart">
            <NavBar countCartItems={cartItems.length} />
            <Container >
                <Row>
                    <Col sm={8}><Main onAdd={onAdd} products={products}></Main></Col>
                    <Col sm={4}> <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket></Col>
                </Row>

            </Container>


        </div>
    );
}

export default HomeCart;
