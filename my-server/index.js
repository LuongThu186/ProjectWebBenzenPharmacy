// const express = require("express");
// const app = express();
// const port = 3000;
// const morgan = require("morgan");
// app.use(morgan("combined"));
// //create default API
// app.get("/", (req, res) => {
//   res.send("Hello Restful API");
// });
// app.listen(port, () => {
//   console.log(`My Server listening on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
app.use(morgan("combined"));

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

const cors = require("cors");
app.use(cors());
app.listen(port, () => {
  console.log(`My Server listening on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("This Web server is processed for MongoDB");
});
const { MongoClient, ObjectId } = require("mongodb");
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("BenZenPharmacyData");
fashionCollection = database.collection("MedicineData");

app.get("/medicines", cors(), async (req, res) => {
  const result = await fashionCollection.find({}).toArray();
  res.send(result);
});
app.get("/medicines/:category", cors(), async (req, res) => {
  const category = req.params["category"];
  const result = await fashionCollection
    .find({ category: category })
    .sort({ createdate: -1 })
    .toArray();
  res.send(result);
});

app.get("/medicines/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

app.post("/medicines", cors(), async (req, res) => {
  //put json Fashion into database
  await fashionCollection.insertOne(req.body);
  //send message to client(send all database to client)
  res.send(req.body);
});

app.put("/medicines", cors(), async (req, res) => {
  //update json Fashion into database
  await fashionCollection.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
        //Field for updating
        style: req.body.style,
        fashion_subject: req.body.fashion_subject,
        fashion_detail: req.body.fashion_detail,
        fashion_image: req.body.fashion_image,
        cDate: req.body.cDate,
      },
    }
  );
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

app.delete("/medicines/:id", cors(), async (req, res) => {
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await fashionCollection.find({ _id: o_id }).toArray();
  //update json Fashion into database
  await fashionCollection.deleteOne({ _id: o_id });
  //send Fahsion after remove
  res.send(result[0]);
});

