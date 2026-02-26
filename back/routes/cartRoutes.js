import express from "express"
import { addToCart, getUserCart, UpdateCart } from "../controller/cart.controller.js"
import isAuth from '../middleware/isAuth.js'
const cartRoutes = express.Router()

cartRoutes.post('/get',isAuth,getUserCart)
cartRoutes.post('/add',isAuth,addToCart)
cartRoutes.post('/deletr',isAuth,UpdateCart)


export default cartRoutes