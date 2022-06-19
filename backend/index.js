const express = require("express");
const mongoose = require("mongoose");
const { Obj } = require("./model");

const app = express();

app.use(express.json());

app.get("/obj", async (req, res) => {
  const allObj = await Obj.find();
  return res.status(200).json(allObj);
});

app.post("/obj", async (req, res) => {
    const newObj = new Obj({ ...req.body });
    const insertedObj = await newObj.save();
    return res.status(201).json(insertedObj);
  });
// ...

const start = async () => {
  try {
    await mongoose.connect(
      ""
    );
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();