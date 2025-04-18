import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verfiyOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verfiyOrder)

export default orderRouter;