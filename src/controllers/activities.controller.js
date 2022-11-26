import { colActivities } from "../database/collections.js";

export async function getActivities(req, res) {
  try {
    const activities = await colActivities.find().toArray();

    res.send(activities);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
