import { productCartUpdateSchema } from "../schemas/productCartUpdate.schema.js";

export async function productOnCartUpdateValidation(req, res, next) {
  const { amount, subtotal } = req.body;

  const { error } = productCartUpdateSchema.validate(
    { amount, subtotal },
    { abortEarly: false }
  );
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(401).send(errors);
  }
  console.log("Success: cart product schema validation!");
  res.locals.validatedCartUpdate = { amount, subtotal };
  next();
}
