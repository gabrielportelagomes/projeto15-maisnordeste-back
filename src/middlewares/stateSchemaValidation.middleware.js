import { stateSchema } from "../schemas/state.schema.js";

export async function stateValidation(req, res, next) {
  const { state } = req.params;
  const { error } = stateSchema.validate(state);
  if (error) {
    const erros = error.details.map((detail) => detail.message);
    return res.status(404).send(erros);
  }
  console.log("Success: state validation!");
  res.locals.validatedState = state;
  next();
}
