import { ObjectId } from "mongodb";
import { colCart } from "../database/collections.js";

export async function productOnCartUpdateAuthorization(req, res, next) {
  // verifica se o userId do produto do carrinho é o mesmo correspondente ao do token (res.locals.authUser)
  const user = res.locals.user;
  const { id } = req.params;
  try {
    const product = await colCart.findOne({ _id: ObjectId(id) });

    if (!product) {
      res.status(404).send({ message: "Produto não encontrado!" });
      return;
    }

    if (product.user.toString() !== user._id.toString()) {
      res.status(401).send({ message: "Usuário não autorizado." });
      return;
    }

    if (product.user.toString() === user._id.toString()) {
      res.locals.authorizedUpdateId = { id };
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}
