const express = require("express");
//const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
//const port = process.env.PORT || 5000; //normalizePort
const port = process.env.PORT || 5000;

app.set("port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  var enforce = require("express-sslify");
  app.use(enforce.HTTPS({ trustProtoHeader: true })); // <==== Right here

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

//var http = require("http");
//http.createServer(app)
app.listen(app.get("port"), (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  /*   const charge = await stripe.charges.create({
    amount: 2000,
    currency: "usd",
    source: "tok_mastercard",
    description: "My First Test Charge (created for API docs)",
  }); */

  stripe.charges.creat(body, (err, suc) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ success: suc });
    }
  });
});
