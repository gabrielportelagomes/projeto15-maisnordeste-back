import joi from "joi";

export const orderSchema = joi.object({
  userId: joi.required(),
  total: joi.number().required(),
  orders: joi.array().items(
    joi.object({
      subtotal: joi.number().required(),
      productId: joi.required(),
      title: joi.string().max(40).required(),
      image: joi.string().uri().required(),
      state: joi
        .string()
        .valid("AL", "BA", "PE", "MA", "CE", "RN", "PB", "PI", "SE")
        .required(),
      season: joi
        .string()
        .valid("Natal", "Carnaval", "Páscoa", "Revéillon", "Mai-Jun", "Set-Out")
        .required(),
      seasonTag: joi
        .string()
        .valid(
          "natal",
          "carnaval",
          "pascoa",
          "reveillon",
          "baixaTemporada1",
          "baixaTemporada2"
        ),
      amount: joi.number().required(),
      breakfast: joi.boolean().required(),
      transport: joi.boolean().required(),
    })
  ),
});
