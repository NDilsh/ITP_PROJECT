import '../index.css';
import React from 'react'
import Product from './Product';
import { Row, Col } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

export default function Main(props) {
    const { products, onAdd } = props;
    return (
        <main className="">
            <h2>PRODUCTS</h2>
            <div className="">
                <Container >
                    <Row>
                        {products.map((product) => (
                            <Col sm={4}>
                                <Product key={product.id} product={product} onAdd={onAdd}></Product>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        </main>
    );

}