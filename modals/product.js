const mongoose = require("mongoose");
// const Joi = require("joi");

// const AuthValidation = Joi.object({
//   title: Joi.string().min(10).max(30).required(),
//   description: Joi.string().min(50).max(250).required(),
//   category: Joi.string().required(),
//   price: Joi.number().required(),
//   discountPercentage: Joi.number().required(),
//   rating: Joi.number().max(5).required(),
//   stock: Joi.number().required(),
//   brand: Joi.number().required(),
// });

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
