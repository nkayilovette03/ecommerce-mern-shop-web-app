import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../model/productModel.js'

//@desc Fetch all Products
//@route GET /api/products
//@acess Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)

//@desc Fetch all a single Product
//@route GET /api/products/:id
//@acess Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
