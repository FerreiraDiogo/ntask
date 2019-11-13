const express = require ("express");
const PORT = 3000;

const app = express();
 

app.get("/",(req,res) =>{
    console.log("zapzap");
})

app.listen(PORT, (req,res) =>{
    console.log("Ntask running over express on port 3K!")
})