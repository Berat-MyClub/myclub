import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/initFirebase";

export default async function handler(req, res) {
  const querySnapshot = await getDocs(collection(db, "events"));
  let events = [];
  querySnapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();

    events.push({ id, ...data });
  });

  res.status(200).send(JSON.stringify(events));
}
