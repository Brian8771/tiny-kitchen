import express from 'express';
import { Order } from '../models/order.js';

const router = express.Router();

router.get("/", (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json(err))
    // get our orders
})

router.post("/", (req, res) => {
    const newOrder = new Order({
        items: req.body.items,
        name: req.body.name,
        address: req.body.address
    })

    newOrder
        .save()
        .then(order => res.json("Your Order is in the Works!"))
        .catch(err => res.status(422).json(err))
})

router.patch("/:order_id", async (req, res) => {
    const id = req.params.order_id;

    const update = {};

    if (req.body.items) update.items = req.body.items;
    if (req.body.name) update.name = req.body.items;
    if (req.body.address) update.address = req.body.address;
    if (req.body.isComplete) update.isComplete = req.body.isComplete;


    const order = await Order.findOneAndUpdate({ id: id }, update, { new: true });

    res.json(order)
})

router.delete("/:order_id", (req, res) => {
    const id = req.params.order_id;
    Order.findOneAndDelete(id)
        .then(order => res.json({ id: order._id }))
        .catch(err => res.status(404).json(err))
})

export const orders = router;
