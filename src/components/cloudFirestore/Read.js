import {
  doc,
  getDoc,
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const docRef = doc(getFirestore(), "events", "ky87TNSgxIAy1ZBTpOZj");
const docSnap = await getDoc(docRef);

const q = query(collection(getFirestore(), "events"));

export default function Read() {
  async function readData() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }
  return (
    <>
      <button onClick={readData}>Read the Data</button>
    </>
  );
}
