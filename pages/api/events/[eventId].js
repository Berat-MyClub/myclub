import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { db } from "../../../firebase/initFirebase";

export default async function handler(req, res) {
  const { eventId } = req.query;

  const docRef = doc(db, "events", `${eventId}`);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    res.status(200).json(docSnap.data());
    // console.log("Event", docSnap.data());
  } else {
    console.log("No such document");
  }
}
