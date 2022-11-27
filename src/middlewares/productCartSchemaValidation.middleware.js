import { ObjectId } from "mongodb";
import { productCartSchema } from "../schemas/productCart.schema.js";

export async function productCartSchemaValidation(req, res, next) {
  const {
    user,
    subtotal,
    idProduct,
    title,
    state,
    image,
    season,
    seasonTag,
    amount,
    breakfast,
    transport,
  } = req.body;

  const { error } = productCartSchema.validate(
    {
      user,
      subtotal,
      idProduct,
      title,
      state,
      image,
      season,
      seasonTag,
      amount,
      breakfast,
      transport,
    },
    { abortEarly: false }
  );
  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }
  console.log("Success: product validation!");
  res.locals.validatedProductCart = {
    user: ObjectId(user),
    subtotal,
    title,
    idProduct: ObjectId(idProduct),
    state,
    image,
    season,
    seasonTag,
    amount,
    breakfast,
    transport,
  };
  next();
}
