import { emailSchema } from "../schemas/email.schema.js";

export function emailSchemaValidation(req, res, next) {
  const { email } = req.params;

  const { error } = emailSchema.validate({ email }, { abortEarly: false });

  if (error) {
    const erros = error.details.map((detail) => detail.message);
    console.log(erros);
    return res.status(400).send(erros);
  }

  res.locals.email = email;

  next();
}
