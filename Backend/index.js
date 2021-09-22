const express = require("express");
const cors =require('cors')
const bodyParser= require('body-parser')
const port = process.env.PORT || 5000;
const app = express();

// Handling **CORS**.
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
  res.json({msg:"Hello from server"})
})
app.post("/submit",(req,res)=>{
  console.log(req.body.name);
  res.sendStatus(200)
})

app.listen(port, (req,res) =>{
  console.log(`server is listening on http://localhost:${port}`)
} )