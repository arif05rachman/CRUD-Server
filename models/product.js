const { getData } = require("../database");
const product = getData().collection("product");
const { ObjectId } = require("mongodb");

class productModel {
  static find() {
    return product.find().toArray();
  }
  static findOne(id) {
    return product.findOne({ _id: ObjectId(id) });
  }
  static insert(newProduct) {
    return product.insertOne(newProduct);
  }
  static updateOne(id, updateProduct) {
    return product.updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: updateProduct,
      }
    );
  }
  static deleteOne(id) {
    return product.deleteOne({ _id: ObjectId(id) });
  }
}

module.exports = productModel;
