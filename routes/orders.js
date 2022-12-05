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
    res.json("POST Success")
})
router.patch("/", (req, res) => {
    res.json("PATCH Success")
})
router.delete("/:order_id", (req, res) => {
    const id = req.params.order_id;
    res.json(`DELETE Success ${id}`)
})

export const orders = router;
