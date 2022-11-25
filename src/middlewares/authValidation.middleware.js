import { colSessions, colUsers } from "../database/collections";

export async function authRoutesValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send("Sessão não encontrada!");
  }

  try {
    const session = await colSessions.findOne({ token });

    const user = await colUsers.findOne({
      _id: session?.userId,
    });

    if (!user) {
      return res.status(401).send("Usuário não encontrado!");
    }

    delete user.password;

    res.locals.user = user;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

  next();
}
