const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

// Handling **CORS**. 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000") ;
 next() ;
 })
app.get("/", (req, res) => {
  res.json({msg:"Hello from server"})
})

app.listen(port, (req,res) =>{
  console.log(`server is listening on http://localhost:${port}`)
} )