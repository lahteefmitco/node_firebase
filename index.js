const express = require("express");
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
require("dotenv").config();

const app = express();
app.use(express.json());

// Firebase client SDK configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdfH0VMf5HvCXA4rO8-nqnjOw3kYm-CIE",
  authDomain: "node-firebase-82d47.firebaseapp.com",
  projectId: "node-firebase-82d47",
  storageBucket: "node-firebase-82d47.firebasestorage.app",
  messagingSenderId: "1077019708561",
  appId: "1:1077019708561:web:21e9d95fb8284cc2a0c330",
  measurementId: "G-CFNKYFFW4T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

app.get("/", (req, res) => {
  res.send({ name: "latheef" });
});

app.post("/example", async (req, res) => {
  try {
    const data = req.body;
    const docRef = await addDoc(collection(db, "exampleCollection"), data);
    res.status(201).json({ id: docRef.id, message: "Document added successfully!" });
  } catch (error) {
    res.status(500).send("Error adding document: " + error.message);
  }
});

app.listen(4000, () => console.log("App is listening at port 4000"));