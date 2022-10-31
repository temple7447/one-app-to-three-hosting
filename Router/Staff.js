const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const staffUser = require("../Model/register")
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const passport = require('passport')
const { LoginAuth, IsNotLogin } = require("../Auth/StaffAuth")


router.get('/stafflogin', ((req, res) => {

    res.render("login", { layout: "index" })

}))

router.get('/staffregister', ((req, res) => {

    res.render("register", { layout: "index" })

}))




router.post('/stafflogin', (req, res, next) => {
    const full = passport.authenticate('local', {
        failureRedirect: '/department/stafflogin',
        successRedirect: "/admin"
    })(req, res, next)
});



router.post('/staffregister', ((req, res) => {

    const { username, firstname, lastname, email, department, password1, password2 } = req.body
    let errors = []

    if (!username || !firstname || !lastname || !email || !password1 || !password2) {
        errors.push({ msg: 'please fill all the fields' })

    }

    if (password1 !== password2) {
        errors.push({ msg: 'please enter the correct field' })
    }

    if (password1.length < 6) {
        errors.push({ msg: 'please your password should be more than six charater' })
    }

    if (errors.length > 0) {
        res.render('register', {
            layout: 'register'
        })
        console.log(error)
    } else {
        staffUser.findOne({ email: email }).then(user => {
            if (user) {
                res.render('register', {
                    layout: 'register',
                    username,
                    firstname,
                    lastname,
                    email
                })

            } else {

                const newUser = new staffUser({
                    username,
                    firstname,
                    lastname,
                    email,
                    department,
                    password1,
                    password2

                })
                console.log(newUser.password1)
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password1, salt, (err, hash) => {
                        if (err) throw err;
                        console.log(hash)
                        newUser.password1 = hash;
                        newUser.save({})
                            .then(user => {
                                //  req.flash('success_msg', 'You are now Registered and can log in ')
                                res.redirect('/department/stafflogin')
                                console.log("it was a success")
                                console.log(user)
                            })
                            .catch(err => console.log(err))
                    })
                })
            }
        })
    }

}))


module.exports = router