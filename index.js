import express from "express";
import { orders } from "./routes/orders.js";

const app = express();
app.use(express.json());

app.get('/test', (req, res) => res.send("Hello World"))
app.use('/api/orders', orders);

const port = process.env.PORT || 5001;
const callback = () => console.log(`Server is running on port ${port}`);
app.listen(port, callback);
