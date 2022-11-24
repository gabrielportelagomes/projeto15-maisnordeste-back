import { userSchema } from "../schemas/user.schema.js";

export function userSchemaValidation(req, res, next) {
  const { email, cpf, name, surname, birthDate, telephone, password, type } =
    req.body;

  const user = {
    email,
    cpf,
    name,
    surname,
    birthDate,
    telephone,
    password,
    type: !type ? "user" : type,
  };

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(400).send(erros);
  }

  res.locals.user = user;

  next();
}
