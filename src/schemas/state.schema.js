import joi from "joi";

export const stateSchema = joi
  .string()
  .valid("AL", "BA", "PE", "MA", "CE", "RN", "PB", "PI", "SE");
