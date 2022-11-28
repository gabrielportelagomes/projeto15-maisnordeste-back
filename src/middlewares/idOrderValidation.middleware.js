import { ObjectId } from "mongodb";
import { colOrders } from "../database/collections.js";

export async function idOrderValidation(req, res, next) {
  const user = res.locals.user;
  const { id } = req.params;

  try {
    const order = await colOrders.findOne({ _id: ObjectId(id) });

    if (!order) {
      res.status(404).send({ message: "Pedido não encontrado!" });
      return;
    }

    if (order.userId.toString() !== user._id.toString()) {
      res.status(401).send({ message: "Usuário não autorizado." });
      return;
    }

    res.locals.id = id;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}
