import connectToDatabase from "../../utils/mongodb";
import { nextCors } from "../../utils/cors";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();

  // CORS middleware
  await nextCors(req, res);

  // récupération de la data
  const { newUserData } = req.body;

  console.log(newUserData);

  const existingUser = await db
    .collection("users")
    .find({ email: email })
    .toArray(async (err, data) => {
      if (err) {
        console.log(err);
        return res.send({ status: "Error" });
      }

      if (!err) {
        // si l'utilisateur existe deja
        if (data.length !== 0) {
          console.log("deja existant");
          return res.send({ status: "Error" });
        }

        // si l'utilisateur n'existe pas, on l'enregistre dans la base de donnée
        if (data.length === 0) {
          const newUser = db.collection("users").insertOne({});
        }
      }
    });
}
