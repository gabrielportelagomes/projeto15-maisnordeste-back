import joi from "joi";

export const cartIdsSchema = joi.object({
  ids: joi.array().items(joi.string()).required(),
});
