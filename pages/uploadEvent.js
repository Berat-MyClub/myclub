import { useState } from "react";
import styled from "styled-components";
import Wrapper from "../src/components/Global/Wrapper";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/initFirebase";
import Header from "../src/components/Upload/Header";
import EventImage from "../src/components/Upload/EventImage";
import InputField from "../src/components/Upload/InputField";

export default function UploadEvent() {
  const [newTitle, setNewTitle] = useState("");
  const [newCity, setNewCity] = useState("");
  const createEvent = async () => {
    await addDoc(collection(db, "events"), { title: newTitle, city: newCity });
  };
  return (
    <Wrapper>
      <Header />
      <EventImage />
      <InputField onChange={(e) => setNewTitle(e.target.value)} label="Titel" type="text" required />
      <InputField onChange={(e) => setNewCity(e.target.value)} label="City" type="text" required />
      <button onClick={createEvent} style={{width: '100%', border: 'none', borderRadius: '7px', color: '#fff',backgroundColor:'#2d97ac', padding: '1rem', marginTop: '1rem'}}>Upload Event</button>
    </Wrapper>
  );
}
