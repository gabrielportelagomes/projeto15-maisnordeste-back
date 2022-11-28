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

export async function putProductsOnCart(req, res) {
  const { id } = res.locals.authorizedUpdateId;
  const user = res.locals.user;

  const { amount, subtotal } = res.locals.validatedCartUpdate;

  try {
    await colCart.updateOne(
      { _id: ObjectId(id) },
      { $set: { amount, subtotal } }
    );
    const productsOnCart = await colCart
      .find({ user: ObjectId(user._id) })
      .toArray();
    res.status(200).send(productsOnCart);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function deleteProductOnCart(req, res) {
  const { id } = res.locals.authorizedUpdateId;
  try {
    await colCart.deleteOne({ _id: ObjectId(id) });
    res.status(200).send({ message: "Produto removido com sucesso!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
