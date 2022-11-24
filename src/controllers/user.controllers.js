import bcrypt from "bcrypt";
import { colUsers } from "../database/collections.js";

export async function postSignUp(req, res) {
  const user = res.locals.user;
  const cryptedPassword = bcrypt.hashSync(user.password, 10);
  try {
    const userExists = await colUsers.findOne({ email: user.email });

    if (userExists) {
      res.status(401).send({ message: "E-mail já cadastrado." });
      return;
    }

    await colUsers.insertOne({ ...user, password: cryptedPassword });

    res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getUserEmail(req, res) {
  const email = res.locals.email;

  try {
    const userExists = await colUsers.findOne({ email });
    if (userExists) {
      res.status(401).send({ message: "E-mail já cadastrado." });
      return;
    }

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
