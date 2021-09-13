import '../index.css'
import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Card.Img className="small" src={product.image} alt={product.name} variant="top"></Card.Img>
                <Card.Body>

                    <Card.Title as="div"><strong>{product.name}</strong></Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>

                    <Card.Text as="h3">
                        RS.{product.price}
                    </Card.Text>


                    <Button variant="primary" onClick={() => onAdd(product)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
