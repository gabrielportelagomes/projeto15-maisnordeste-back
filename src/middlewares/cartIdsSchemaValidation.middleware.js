import { cartIdsSchema } from "../schemas/cartIds.schema.js";

export function cartIdsSchemaValidation(req, res, next) {
  const { ids } = req.body;

  const { error } = cartIdsSchema.validate({ ids }, { abortEarly: false });

  if (error) {
    const erros = error.details.map((detail) => detail.message);
    console.log(erros);
    return res.status(400).send(erros);
  }

  res.locals.ids = ids;

  next();
}
