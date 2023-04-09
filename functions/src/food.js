import { db } from "./dbconnect.js";
import { FieldValue } from "firebase-admin/firestore"


const coll = db.collection("Food")


// CRUD ADD 
export async function addFood(req, res) {
  const newFood = req.body;
  newFood.createdAt = FieldValue.serverTimestamp()
  await coll.add(newFood);
  res.status(201).send({ message: "Food item has been added!."})
}

// CRUD GET ALL 
export async function getAllFood(req, res) {
  const collection = await coll.get()
  const myFood = collection.docs.map(
    doc => ({... doc.data(), id:doc.id}))
    res.status(200).send(myFood)
}

//CRUD DELETE 
export async function deleteFood(req, res) {
  const { id } = req.params 
  await coll.doc(id).delete()
  res.status(202).send("Food has been deleted.")
}

//CRUD UPDATE 
export async function updateFood(req, res) {
  const { id } = req.params 
  const updateInfo = req.body 
  await coll.doc(id).update(updateInfo)
  res.status(202).send("Food has been UPDATED!!!")
}
