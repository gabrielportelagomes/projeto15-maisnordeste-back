import { colUsers } from "../database/collections.js";
import bcrypt from "bcrypt";

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await colUsers.findOne({ email });

    if (!user) {
      return res.status(401).send({ message: "E-mail e/ou senha incorretos!" });
    }

    const passwordCheck = bcrypt.compareSync(password, user.password);

    if (!passwordCheck) {
      return res.status(401).send({ message: "E-mail e/ou senha incorretos!" });
    }

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
