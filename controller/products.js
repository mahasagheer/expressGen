const Products = require("../modals/product");

async function AllProductGet(req, res) {
  try {
    const products = await Products.find({});
    return res.json(products);
  } catch {
    return res.send("Unable to Fetch ");
  }
}
async function ProductGet(req, res) {
  try {
    const update = await Products.findById(req.params.id);
    return res.json(update);
  } catch {
    res.status(404).json({
      msg: "Unable to get single product",
    });
  }
}
async function ProductPost(req, res) {
  try {
    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
    } = req.body;
    let newProduct = new Products({
      title: title,
      description: description,
      category: category,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
    });
    newProduct = newProduct.save();
    newProduct = res.status(201).json({ msg: "Success" });
  } catch {
    return res.status(404).json({ msg: "Server Not found" });
  }
}
async function ProductPut(req, res) {
  try {
    const {
      title,
      description,
      category,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
    } = req.body;
    const update = await Products.findByIdAndUpdate(req.params.id, {
      title: title,
      description: description,
      category: category,
      price: price,
      discountPercentage: discountPercentage,
      rating: rating,
      stock: stock,
      brand: brand,
    });
    return res.json(update);
  } catch {
    res.status(404).json({
      msg: "Unable to update",
    });
  }
}
async function ProductDelete(req, res) {
  try {
    const deleteProduct = await Products.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Deleted SuccessFully",
      title: deleteProduct.title,
    });
  } catch {
    return res.status(404).json({
      msg: "Unable to delete product",
    });
  }
}
module.exports = {
  AllProductGet,
  ProductDelete,
  ProductGet,
  ProductPost,
  ProductPut,
};
