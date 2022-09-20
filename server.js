const express = require("express")
const app = express();
const path = require("path")
const hbs = require("express-handlebars").engine
const session = require("express-session");



app.engine("hbs", hbs({extname:"hbs"}))
app.set("view engine", ".hbs")




app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index",{layout:"index"})
})

const PORT = process.env.PORT || 3004


app.listen(PORT,()=>
{console.log("you are connect and please try if it is working")})