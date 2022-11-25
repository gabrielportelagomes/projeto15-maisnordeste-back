import { productSchema } from "../schemas/products.schema.js";

export async function productsValidation(req, res, next) {
  const { admin, title, state, tags, description, prices, image, stock } =
    req.body;
  const { error } = productSchema.validate(
    {
      admin,
      title,
      state,
      tags,
      description,
      prices,
      image,
      stock,
    },
    { abortEarly: false }
  );
  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }
  console.log("Success: product validation!");
  res.locals.validatedProduct = {
    admin,
    title,
    state,
    tags,
    description,
    image,
    prices,
    stock,
  };
  next();
}
