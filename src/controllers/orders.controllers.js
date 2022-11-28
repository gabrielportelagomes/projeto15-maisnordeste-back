import dayjs from "dayjs";
import { ObjectId } from "mongodb";
import { colOrders } from "../database/collections.js";

export async function postOrder(req, res) {
  const order = res.locals.validatedOrder;

  try {
    await colOrders.insertOne({... order, date: dayjs().format("DD/MM/YYYY")});

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getOrders(req, res) {
  const user = res.locals.user;

  try {
    const orders = await colOrders.find({ userId: ObjectId(user._id) }).toArray();

    res.status(201).send(orders);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
