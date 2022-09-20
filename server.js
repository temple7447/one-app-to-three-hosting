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
const StudentRouter = require("./Router/Student")
const MainRouter = require("./Router/main")


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
app.use("/", StudentRouter)
// app.use('/department',StaffRouter)
app.use('/',MainRouter)
// app.use('/',DepartmentRouter)
// app.use('/api',NewsRouter)
// app.use('/Admin',searchRouter)
// app.use('/Admin',NotificationRouter)
// app.use('/Admin',EditRouter)
// app.use('/Admin',ClassRouter)

const PORT = process.env.PORT || 3004


app.listen(PORT,()=>
{console.log("you are connect and please try if it is working")})