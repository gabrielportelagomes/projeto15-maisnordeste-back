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
