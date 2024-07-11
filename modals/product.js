const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: [true, "Title name of every product must be unique"],
  },
  description: {
    type: String,
    max: [250, "Not more than 250 characters"],
    required: [true, "Description required"],
  },
  category: {
    type: String,
    required: [true, "Description required"],
  },
  price: {
    type: Number,
    required: [true, "Description required"],
  },
  discountPercentage: {
    type: Number,
    required: [true, "Description required"],
  },
  rating: {
    type: Number,
    required: [true, "Description required"],
    min: [5, "Rating must below than 5"],
  },
  stock: {
    type: Number,
    required: [true, "Description required"],
  },
  brand: {
    type: String,
    required: [true, "Description required"],
  },
});
const Products = mongoose.model("Products", productSchema);
module.exports = Products;
