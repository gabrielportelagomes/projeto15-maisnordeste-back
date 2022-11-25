import joi from "joi";

export const productSchema = joi.object({
  admin: joi.string().email().required(),
  title: joi.string().max(40).required(),
  state: joi
    .string()
    .valid("AL", "BA", "PE", "MA", "CE", "RN", "PB", "PI", "SE")
    .required(),
  tags: joi
    .array()
    .items(
      joi
        .string()
        .required()
        .valid(
          "Praia",
          "Serra",
          "Festas",
          "História",
          "Gastronomia",
          "Lagoas e rios",
          "Aventura"
        )
    ),
  description: joi.string().max(200).required(),
  prices: joi
    .object({
      altaTemporada: joi.number().required(),
      baixaTemporada: joi.number().required(),
      cafe: joi.number().required(),
      translado: joi.number().required(),
    })
    .required(),
  image: joi.string().uri(),
  stock: joi
    .object({
      natal: joi.number().required(),
      carnaval: joi.number(),
      reveillon: joi.number().required(),
      pascoa: joi.number().required(),
      baixaTemporada1: joi.number().required(),
      baixaTemporada2: joi.number().required(),
    })
    .required(),
});
