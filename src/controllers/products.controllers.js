import { ObjectId } from "mongodb";
import { colProducts } from "../database/collections.js";

export async function postProducts(req, res) {
  const validatedProduct = res.locals.validatedProduct;
  try {
    await colProducts.insertOne(validatedProduct);
    res.status(201).send({ message: "Produto cadastrado com sucesso!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getProducts(req, res) {
  const validState = res.locals.validatedState;
  try {
    const productsFromState = await colProducts
      .find({ state: validState })
      .toArray();
    res.status(200).send(productsFromState);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

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
