import joi from "joi";

export const userSchema = joi.object({
  email: joi.string().email().required(),
  cpf: joi.string().min(11).max(11).required(),
  name: joi.string().required().min(3).max(50),
  surname: joi.string().required().min(3).max(50),
  birthDate: joi.string().min(10).max(10).required(),
  telephone: joi.string().min(11).max(11).required(),
  password: joi.string().min(6).required(),
  type: joi.string().valid("user", "admin").required(),
});
