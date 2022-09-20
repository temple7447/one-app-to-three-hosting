const express = require("express")
const app = express();
const path = require("path")
const hbs = require("express-handlebars").engine
const session = require("express-session");
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const db = require("./db")()
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const handlebars = require('handlebars')
const AdminRouter = require("./Router/Admin")


// cor middleware
app.use(cors())

app.use(session({
    secret:'temple',
    resave:false,
    saveUninitialized:true,
}));

// morgan
app.use(morgan('dev'));
app.engine('.hbs', hbs({
    layoutsDir: `${__dirname}/views/layouts`,
     extname:'.hbs',
     handlebars: allowInsecurePrototypeAccess(handlebars)}))
app.set('view engine', '.hbs')




app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.render("index",{layout:"index"})
})
app.use("/Admin", AdminRouter)

const PORT = process.env.PORT || 3004


app.listen(PORT,()=>
{console.log("you are connect and please try if it is working")})