import joi from "joi";

export const productCartUpdateSchema = joi.object({
  amount: joi.number().required(),
  subtotal: joi.number().required(),
});
