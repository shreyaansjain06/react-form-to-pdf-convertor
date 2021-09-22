const express = require("express");
const cors =require('cors')
const bodyParser= require('body-parser')
const port = process.env.PORT || 5000;
const app = express();

// Handling **CORS**.
app.use(cors());
app.get("/", (req, res) => {
  res.json({msg:"Hello from server"})
})
app.post("/submit",(req,res)=>{
  console.log(res);
  console.log("succesffull *****************")
})

app.listen(port, (req,res) =>{
  console.log(`server is listening on http://localhost:${port}`)
} )