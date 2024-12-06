const express = require("express");
const admin = require("firebase-admin");
const app = express();


app.use(express.json()); 


// Import Firebase service account key
const serviceAccount = require("./firebase_service_account_key/node-firebase-82d47-firebase-adminsdk-fnfec-59790233d8.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://node-firebase-82d47.firebaseio.com",
});

// Firestore reference
const db = admin.firestore();

app.get("/",(req,res)=>{
    res.send({"name":"latheef"});
})

app.post("/example",async(req,res)=>{
    try {
        const data = req.body;
        const docRef = await db.collection("exampleCollection").add(data);
        res.status(201).json({ id: docRef.id, message: "Document added successfully!" });
      } catch (error) {
        res.status(500).send("Error adding document: " + error.message);
      }
})

app.listen(4000,()=>console.log("App is listening at port 4000"));
