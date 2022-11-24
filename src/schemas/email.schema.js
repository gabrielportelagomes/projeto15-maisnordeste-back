import joi from "joi";

export const emailSchema = joi.object({
  email: joi.string().email().required(),
});
