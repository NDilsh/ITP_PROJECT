const express = require('express');
const Cart = require('../models/cartModel')

const router = express.Router();

//@url           /cart/add
//@description   save items,add items to the cart

router.post('/cart/add', (req, res) => {

    let cartItem = new Cart(req.body);

    cartItem.save((err => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Items Added To Cart"
        });
    }));
});

//@url              /cart/display
//@description      get items,retrieve cart

router.get('/cart/display', (req, res) => {
    Cart.find().exec((err, cartItems) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingcartItems: cartItems
        });
    });
});

//@url            /cart/update/:id
//@description    update quantity

router.put('/cart/update/:id', (req, res) => {
    Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, cartItems) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Succesfully"
            })
        }

    );
});

//@url            /cart/delete/:id
//@discription    delete items from cart

router.delete('/cart/delete/:id', (req, res) => {
    Cart.findOneAndRemove(req.params.id).exec((err, deletedItem) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccesful", err
        });
        return res.json({
            message: "Delete Succesfull", deletedItem
        });

    });
});


module.exports = router;