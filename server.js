const express = require("express")
const app = express();
const fs = require('fs')
const { google } = require('googleapis')
const path = require("path")
const hbs = require("express-handlebars").engine
const session = require("express-session");
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const db = require("./db")()
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const handlebars = require('handlebars')
const AdminRouter = require("./Router/Admin")
const StudentRouter = require("./Router/Student")
const fileUpload = require('express-fileupload');
const MainRouter = require("./Router/main")
const passport = require("passport");
const localStrategy = require("passport-local").Strategy
const StaffRouter = require("./Router/Staff")
const DepartmentRouter = require("./Router/department");
const { IsNotLogin, LoginAuth } = require("./Auth/StaffAuth")
const staffUser = require("./Model/register")
const bcrypt = require('bcryptjs');
const NotificationRouter = require("./Router/notification");
const EditRouter = require("./Router/edit");
const ClassRouter = require("./Router/Class")
const GOOGLE_API_FOLDER_ID = '172YK_mUy_tSGUVwsLn0Ho35ZTNYra9os' || '1UnLv3b2bwL7nwjrFokXAg6HArP4TW6lB'

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, 'files')))
app.use(express.static(path.join(__dirname, 'css')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// cor middleware
app.use(cors())

app.use(session({
    secret: 'temple',
    resave: false,
    saveUninitialized: true,
}));

// morgan
app.use(morgan('dev'));
app.engine('.hbs', hbs({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(handlebars)
}))
app.set('view engine', '.hbs')

app.use(passport.initialize());
app.use(passport.session())


// file upload
app.use(fileUpload({
    createParentPath: true
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    staffUser.findById(id, (err, user) => {
        done(err, user)
    })

})

// staffUser.find().then(user=>console.log(user))
passport.use(new localStrategy({ usernameField: "email", passwordField: "password1" }, (email, password1, done) => {
    staffUser.findOne({ email: email })
        .then(user => {
            console.log(user)
            if (!user) return done(null, false, { message: "that email is not register " })
            bcrypt.compare(password1, user.password1, (err, ismatch) => {
                if (err) return done(err);
                if (ismatch) return done(null, user)
                else return done(null, false, { message: 'the password is not correct' });

            })
        })
        .catch(err => console.log(err))
}))

app.get("/", (req, res) => res.render("index", { layout: "index" }))
app.use("/Admin", AdminRouter)
app.use("/", StudentRouter)
app.use('/department', StaffRouter)
app.use('/', MainRouter)
app.use('/', DepartmentRouter)


// app.use('/api',NewsRouter)
// app.use('/Admin',searchRouter)
app.use('/Admin', NotificationRouter)
app.use('/Admin', ClassRouter)

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => { console.log("you are connect and please try if it is working") })