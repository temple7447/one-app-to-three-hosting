const passport = require("passport")

const LoginAuth = (req,res,next)=>{
    if(req.isAuthenticated()) return next()
    res.redirect("/department/stafflogin")  
}

const IsNotLogin = (req,res,next)=>{
    if(!req.isAuthenticated()) return next()
    res.redirect("/admin")
}

module.exports = { LoginAuth, IsNotLogin}