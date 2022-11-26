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
