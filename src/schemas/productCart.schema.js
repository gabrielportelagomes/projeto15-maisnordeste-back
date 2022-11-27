import joi from "joi";

export const productCartSchema = joi.object({
  user: joi.required(),
  subtotal: joi.number().required(),
  idProduct: joi.required(),
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
    .valid("natal", "carnaval", "pascoa", "reveillon", "baixaTemporada"),
  amount: joi.number().required(),
  breakfast: joi.boolean().required(),
  transport: joi.boolean().required(),
});
