import { ObjectId } from "mongodb";
import { orderSchema } from "../schemas/order.schema.js";

export async function orderSchemaValidation(req, res, next) {
  const { userId, total, payment, orders } = req.body;

  const { error } = orderSchema.validate(
    {
      userId,
      total,
      payment,
      orders,
    },
    { abortEarly: false }
  );
  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }

  res.locals.validatedOrder = {
    userId: ObjectId(userId),
    total,
    payment,
    orders,
  };
  next();
}
