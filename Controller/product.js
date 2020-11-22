const product = require("../models/product");

class Product {
  static async create(req, res, next) {
    try {
      const {name, stock, price, date} = req.body
      const addProduct = await product.insert({name, stock, price, date});
      const response = await addProduct.ops[0]
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
  static async findAll(req, res, next) {
    try {
      const dataProducts = await product.find();
      const response = await dataProducts
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      const { id } = req.params;
      console.log(req.params)
      const dataProduct = await product.findOne(id);
      const response = await dataProduct
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name, stock, price, date } = req.body;  
      const updateProduct = await product.updateOne(id, {
        name,
        stock,
        price,
        date,
      });
      const response = await updateProduct.result
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteProduct = await product.deleteOne(id);
      const response = await deleteProduct.result
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Product