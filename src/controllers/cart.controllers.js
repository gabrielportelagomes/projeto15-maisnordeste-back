import { ObjectId } from "mongodb";
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

export async function getProductsOnCart(req, res) {
  const user = res.locals.user;

  try {
    const productsOnCart = await colCart
      .find({ user: ObjectId(user._id) })
      .toArray();

    res.send(productsOnCart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteCart(req, res) {
  const user = res.locals.user;
  const ids = res.locals.ids;
  console.log(user);
  try {
    res.send();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
