import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { addFood, getAllFood } from "./src/food.js";



const app = express()
app.use(cors());
app.use(express.json()) 


app.get("/test", (req, res) => {
  res.send("This is my MENU!🍔")
})

app.post("/Food", addFood)
app.get("/Food", getAllFood)











export const api = functions.https.onRequest(app)