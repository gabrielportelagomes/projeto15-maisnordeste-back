import { colOrders } from "../database/collections.js";

export async function postOrder(req, res) {
  const order = res.locals.validatedOrder;

  try {
    await colOrders.insertOne(order);

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
