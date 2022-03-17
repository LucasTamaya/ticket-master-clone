import connectToDatabase from "../../utils/mongodb";
import { nextCors } from "../../utils/cors";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  // connexion à la base de donnée
  const { db } = await connectToDatabase();

  // CORS middleware
  await nextCors(req, res);

  // récupération de la data
  const { email, password } = req.body;

  const existingUser = await db
    .collection("users")
    .find({ email: email })
    .toArray(async (err, data) => {
      if (err) {
        console.log(err);
        return res.send({ status: "Error" });
      }

      if (!err) {
        // si l'utilisateur n'existe pas encore
        if (data.length === 0) {
          console.log("non existant");
          return res.send({ status: "Error" });
        }

        // si l'utilisateur existe, on vérifie la validité de son mot de passe
        if (data.length !== 0) {
          console.log("existant");

          const isMatch = await bcrypt.compare(password, data[0].password);

          // si erreur avec le pwd
          if (!isMatch) {
            console.log("mot de passe incorrect");
            return res.send({ status: "Error" });
          }

          // si aucune erreur avec le pwd
          if (isMatch) {
            return res.status(200).send({ status: "Success" });
          }
        }
      }
    });
}
