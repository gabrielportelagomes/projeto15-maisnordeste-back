import { colCart } from "../database/collections.js";

export async function postProductOnCart(req, res) {
  const validatedProductCart = res.locals.validatedProductCart;

  try {
    await colCart.insertOne(validatedProductCart);

    res.status(201).send({ message: "Pedido enviado para o carrinho!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
