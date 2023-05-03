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
medicineCollection = database.collection("MedicineData");
accountCollection = database.collection("AccountCustomerData");

app.get("/medicines", cors(), async (req, res) => {
  const result = await medicineCollection.find({}).toArray();
  res.send(result);
});
app.get("/medicines/detail/:id", cors(), async (req, res) => {
  var o_id = new ObjectId(req.params["id"]);
  const result = await medicineCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});
app.get("/medicines/:category", cors(), async (req, res) => {
  const category = req.params["category"];
  const result = await medicineCollection
    .find({ Category: category})
    .toArray();
  res.send(result);
});
app.get("/medicines/:category/:subcategory", cors(), async (req, res) => {
  const category = req.params["category"];
  const subcategory = req.params["subcategory"];
  const result = await medicineCollection
    .find({ Category: category, SubCategory: subcategory })
    .toArray();
  res.send(result);
});

app.post("/medicines", cors(), async (req, res) => {
  //put json Fashion into database
  await medicineCollection.insertOne(req.body);
  //send message to client(send all database to client)
  res.send(req.body);
});

app.put("/medicines", cors(), async (req, res) => {
  //update json Fashion into database
  await medicineCollection.updateOne(
    { _id: new ObjectId(req.body._id) }, //condition for update
    {
      $set: {
        //Field for updating
        Name: req.body.Name,
        Price: req.body.Price,
        Image: req.body.Image,
        Description: req.body.Description,
        Ingredients: req.body.Ingredients,
        Uses: req.body.Uses,
        Directions: req.body.Directions,
        Store: req.body.Store,
        Warnings: req.body.Warnings,
        Brand: req.body.Brand,
        Manufacturer: req.body.Manufacturer,
        Category: req.body.Category,
        SubCategory: req.body.SubCategory,
        Create_date: req.body.Create_date,
      },
    }
  );
  //send Fahsion after updating
  var o_id = new ObjectId(req.body._id);
  const result = await medicineCollection.find({ _id: o_id }).toArray();
  res.send(result[0]);
});

app.delete("/medicines/:id", cors(), async (req, res) => {
  //find detail Fashion with id
  var o_id = new ObjectId(req.params["id"]);
  const result = await medicineCollection.find({ _id: o_id }).toArray();
  //update json Fashion into database
  await medicineCollection.deleteOne({ _id: o_id });
  //send Fahsion after remove
  res.send(result[0]);
});


const session = require('express-session');
const { hasSubscribers } = require('diagnostics_channel');
app.use(session({secret: "Shh, its a secret!"}));
app.get("/contact",cors(),(req,res)=>{
    if(req.session.visited!=null)
    {
        req.session.visited++
        res.send("You visited this page "+req.session.visited +" times")
    }
    else
    {
        req.session.visited=1
        res.send("Welcome to this page for the first time!")
    }
})

app.post("/cart/",cors(),(req,res)=>{
  const med = req.body
  if(req.session.carts==null){
      req.session.carts=[]
  }
  const existingMed = req.session.carts.find((m) => m._id === med._id);

  if (existingMed) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng sản phẩm của sản phẩm đó
    existingMed.quantity += med.quantity;
  }else{
    req.session.carts.push(med)
  }
  res.send(med)
})
app.get("/cart",cors(),(req,res)=>{
  res.send(req.session.carts)
})
app.get("/cart/:id",cors(),(req,res)=>{
  if(req.session.carts!=null)
  {

      p=req.session.carts.find(x=>x.barcode==req.body.barcode)
      res.send(p)
  }
  else
      res.send(null)
})
app.delete("/cart/delete/:id",cors(),(req,res)=>{
  if(req.session.carts!=null)
  {
      id=req.params["id"]
      req.session.carts =req.session.carts.filter(x => x._id !== id);        
  }
  res.send(req.session.carts)
})
app.put("/cart",cors(),(req,res)=>{
  if(req.session.carts!=null)
  {

      p=req.session.carts.find(x=>x.barcode==req.body.barcode)
      if(p!=null)
      {
          p.quantity=req.body.quantity            
      }
  }
  res.send(req.session.carts)
})

app.get("/accounts", cors(), async (req, res) => {
  const result = await accountCollection.find({}).toArray();
  res.send(result);
});

app.get("/accounts/:phoneNumber", cors(), async (req, res) => {
  const phone = req.params["phoneNumber"];
  const result = await accountCollection
    .find({ Phone: phone})
    .toArray();
  res.send(result);
});
