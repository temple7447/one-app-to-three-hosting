const express = require("express")
const app = express();
const path = require("path")


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index")
})

const PORT = process.env.PORT || 3004


app.listen(PORT,()=>
{console.log("you are connect and please try if it is working")})