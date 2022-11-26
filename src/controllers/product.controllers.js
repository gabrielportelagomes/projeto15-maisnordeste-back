import { ObjectId } from "mongodb";
import { colProducts } from "../database/collections.js";

export async function getProduct(req, res) {
  const { idProduct } = req.params;

  try {
    const product = await colProducts.findOne({ _id: ObjectId(idProduct) });

    if (!product) {
      return res.status(404).send("Produto inexistente!");
    }

    res.send(product);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
