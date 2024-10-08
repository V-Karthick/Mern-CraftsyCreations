const express = require("express")
const router = express.Router();
const Order = require("../models/orderModel");
const orderModel = require("../models/orderModel");

router.post("/add",async(req, res)=>{
    try {
        const {address, phno, pName, pImage, pQuantity, pPrice}=req.body;
    if(address && pName)
    {
        const addOrder = await Order.create({
            userAddress:address,
            userPhno:phno,
            productName:pName,
            productImage:pImage,
            productQuantity:pQuantity,
            productPrice:pPrice
        })
        res.json({
            message:"Placed order successfully"
        })
    }
    else
    {
        res.json({
            message:"No data is present"
        })
    }
    } catch (error) {
        console.log(error)
    }
    
})

router.get("/view",async(req, res)=>{
    try {
        const orderedData = await orderModel.find()
        if(orderedData)
        {
            res.json(orderedData)
        }
        else
        {
            res.json({
                message:"No order is placed"
            })
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router