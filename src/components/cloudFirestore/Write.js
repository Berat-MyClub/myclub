import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 


export default function Write() {

    async function sendData() {
        try {
            const docRef = await addDoc(collection(getFirestore(), "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return(
        <>
        <button onClick={sendData}>Send data to cloud firestore</button>
        </>
    )
}