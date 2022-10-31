const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const s3 = new AWS.S3()
const fs = require('fs')
const { google } = require('googleapis')
const MatriculationMorning = require('../Model/MatriculationModelMorning')
const MatriculationEvening = require('../Model/MatriculationModelEvening')
const General = require('../Model/MorningHnd2Model')
const EditImage = require('../Model/Image');
const Notification = require('../Model/Notification')

const MorningHnd1Models = require('../Model/HND1')
const MorningHnd2Models = require('../Model/HND2')


const Morningnd1Models = require('../Model/ND1')
const Morningnd2Models = require('../Model/ND2')

const EveningHnd2Models = require('../Model/HND22')
const EveningHnd1Models = require('../Model/HND11')

const Eveningnd2Models = require('../Model/ND22')
const Eveningnd1Models = require('../Model/ND11')




const GOOGLE_API_FOLDER_ID = '172YK_mUy_tSGUVwsLn0Ho35ZTNYra9os' || '1UnLv3b2bwL7nwjrFokXAg6HArP4TW6lB'

const tileheader = "COMPUTERLAB"




router.post('/studentform', (req, res) => {
    const { morneven, level, department } = req.body;
    // CIVIL
    if (morneven == "MORNING" && level == "HND2" && department == "CIVIL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd2assignment', { layout: 'index', list: notification, title: tileheader, department: "CIVIL ENGINEERING HND2" })
            }
        })


    } else
    if (morneven == "MORNING" && level == "HND1" && department == "CIVIL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd1assignment', { layout: 'index', list: notification, title: tileheader, department: "CIVIL ENGINEERING HND1" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND2" && department == "CIVIL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd2assignment', { layout: 'index', list: notification, title: tileheader, department: "CIVIL ENGINEERING ND2" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND1" && department == "CIVIL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd1assignment', { layout: 'index', list: notification, title: tileheader, department: "CIVIL ENGINEERING ND1" })
            }
        })
    } else
    // CHEMICAL
    if (morneven == "MORNING" && level == "HND2" && department == "CHEMICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd2assignment', { layout: 'index', list: notification, title: tileheader, department: "CHEMICAL ENGINEERING HND2" })
            }
        })


    } else
    if (morneven == "MORNING" && level == "HND1" && department == "CHEMICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd1assignment', { layout: 'index', list: notification, title: tileheader, department: "CHEMICAL ENGINEERING HND1" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND2" && department == "CHEMICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd2assignment', { layout: 'index', list: notification, title: tileheader, department: "CHEMICAL ENGINEERING ND2" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND1" && department == "CHEMICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd1assignment', { layout: 'index', list: notification, title: tileheader, department: "CHEMICAL ENGINEERING ND1" })
            }
        })
    } else
    // ELECTRICAL
    if (morneven == "MORNING" && level == "HND2" && department == "ELECTRICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {
                res.render('hnd2assignment', { layout: 'index', list: notification, title: tileheader, department: "ELECTRICAL ENGINEERING HND2" })
            }
        })


    } else
    if (morneven == "MORNING" && level == "HND1" && department == "ELECTRICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd1assignment', { layout: 'index', list: notification, title: tileheader, department: "ELECTRICAL ENGINEERING HND1" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND2" && department == "ELECTRICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd2assignment', { layout: 'index', list: notification, title: tileheader, department: "ELECTRICAL ENGINEERING ND2" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND1" && department == "ELECTRICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd1assignment', { layout: 'index', list: notification, title: tileheader, department: "ELECTRICAL ENGINEERING ND1" })
            }
        })
    }

    // MINIRAL
    else
    if (morneven == "MORNING" && level == "HND2" && department == "MINIRAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd2assignment', { layout: 'index', list: notification, title: tileheader, department: "MINIRAL ENGINEERING HND2" })
            }
        })


    } else
    if (morneven == "MORNING" && level == "HND1" && department == "MINIRAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd1assignment', { layout: 'index', list: notification, title: tileheader, department: "MINIRAL ENGINEERING HND1" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND2" && department == "MINIRAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd2assignment', { layout: 'index', list: notification, title: tileheader, department: "MINIRAL ENGINEERING ND2" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND1" && department == "MINIRAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd1assignment', { layout: 'index', list: notification, title: tileheader, department: "MINIRAL ENGINEERING ND1" })
            }
        })
    }
    // MECHANICAL
    else
    if (morneven == "MORNING" && level == "HND2" && department == "MECHANICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd2assignment', { layout: 'index', list: notification, title: tileheader, department: "MECHANICAL ENGINEERING HND2" })
            }
        })


    } else
    if (morneven == "MORNING" && level == "HND1" && department == "MECHANICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('hnd1assignment', { layout: 'index', list: notification, title: tileheader, department: "MECHANICAL ENGINEERING HND1" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND2" && department == "MECHANICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd2assignment', { layout: 'index', list: notification, title: tileheader, department: "MECHANICAL ENGINEERING ND2" })
            }
        })

    } else
    if (morneven == "MORNING" && level == "ND1" && department == "MECHANICAL") {
        Notification.find({ morneven: morneven, level: level, department: department }).then((notification) => {
            if (!notification) {
                res.send('you class dont have any assignment for you know')
            } else {

                res.render('nd1assignment', { layout: 'index', list: notification, title: tileheader, department: "MECHANICAL ENGINEERING ND1" })
            }
        })
    }
})


router.post('/student', async(req, res) => {
    const { fullname, matriculation, level, morneven } = req.body;
    const { name, data, mimetype, size } = req.files.avater;
    const avater = req.files.avater
    try {
        if (mimetype == 'application/pdf' || mimetype == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || mimetype == "application/doc") {
            if (!req.files) {
                res.send('you have to input your image')
            } else {
                //   await s3.putObject({
                //     Body: JSON.stringify({key:"value"}),
                //     Bucket: "cyclic-dull-erin-termite-toga-sa-east-1",
                //     Key:"some_files/my_file.json",
                // }).promise()
                // .catch(()=>console.log("it was not successful"))

                if (!fullname && !matriculation && !morneven && !level) {

                    res.render('assignment', { layout: 'index', allfield: "YOU ARE TO FILL ALL FIELD BEFORE YOU CAN SUBMIT" })

                } else {
                    avater.mv('./files/' + name)

                    // async function uploadFile() {
                    //   try {
                    //     const auth = new google.auth.GoogleAuth({
                    //       keyFile: '../googleapi.json',
                    //       scopes: ['https://www.googleapis.com/auth/drive']
                    //     })

                    //     const driveService = google.drive({
                    //       version: 'v3',
                    //       auth
                    //     })

                    //     const fileMetaData = {
                    //       'name': `e3sconf_astechnova2017_01021 (1).pdf`,
                    //       'parents': [GOOGLE_API_FOLDER_ID]
                    //     }

                    //     const media = {
                    //       mimeType: 'image/jpg' || 'application/pdf' || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || "application/doc",
                    //       body: fs.createReadStream(`../e3sconf_astechnova2017_01021 (1).pdf`)
                    //     }

                    //     const response = await driveService.files.create({
                    //       resource: fileMetaData,
                    //       media: media,
                    //       field: 'id'
                    //     })
                    //     return response.data.id

                    //   } catch (err) {
                    //     console.log('Upload file error', err)
                    //   }
                    // }

                    // uploadFile().then(data => {
                    //   console.log(data)
                    //   //https://drive.google.com/uc?export=view&id=
                    // })
                    //   .catch(err => console.log(err))




                    if (morneven == "MORNING") {
                        MatriculationMorning.findOne({ matriculation: matriculation }).then((user) => {
                            if (!user) {
                                res.render('assignment', { layout: 'index', matriculation: "YOU MATRICULATION NAME IS NOT ON THE LIST" })
                            } else {
                                if (level == "HND2") {
                                    // start1
                                    const User = new MorningHnd2Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })

                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })

                                    UserM.save().then(() => {
                                            console.log('it has be created')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                    User.save().then(() => {
                                            console.log('it has be created')
                                        }).then(() => {
                                            res.render('assignment', { layout: 'index', success: "IT WAS SUCCESSFULLY SENT" })
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })

                                    // end1   

                                } else if (level == "HND1") {
                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new MorningHnd1Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserM.save().then(() => {
                                            console.log('it has be created')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                    User.save().then(() => {
                                            console.log('it has be created')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })

                                } else if (level == "ND2") {
                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new Morningnd2Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserM.save().then((created) => {
                                            console.log('it has be created from general')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                    User.save().then((created) => {
                                            console.log('it has be created from nd2')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })
                                } else if (level == "ND1") {
                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new Morningnd1Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserM.save().then((created) => {
                                            console.log('it has be created')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })
                                    User.save().then((created) => {
                                            console.log('it has be created')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                }
                                // END OF MORNING
                            }
                        })
                    } else if (morneven == "EVENING") {
                        MatriculationEvening.findOne({ matriculation: matriculation }).then((user) => {
                            if (!user) {
                                console.log('your name is not on the list')
                                res.send('your name is not on the list of auchi polytechnic for evening student')
                            } else {
                                if (level == "HND2") {
                                    // start1
                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new EveningHnd2Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserM.save().then((red) => {
                                            res.redirect('/')
                                            console.log('evening student')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })
                                    User.save().then((red) => {

                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                        // end1

                                } else if (level == "HND1") {
                                    const UserM = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new EveningHnd1Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserM.save().then((created) => {
                                            console.log('it has be created')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            res.redirect('/assignment')
                                            console.log(err)
                                        })
                                    User.save().then((created) => {

                                        })
                                        .catch((err) => {
                                            console.log(err)

                                        })
                                } else if (level == "ND2") {
                                    const UserE = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new Eveningnd2Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserE.save().then((created) => {
                                            console.log('it has be created')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })
                                    User.save().then((created) => {
                                            console.log(created)
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                } else if (level == "ND1") {
                                    const UserE = new General({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    const User = new Eveningnd1Models({
                                        fullname: fullname,
                                        matriculation: matriculation,
                                        morneven: morneven,
                                        level: level,
                                        name: name,
                                        desc: "my first photo",
                                        size: size,
                                        files: {
                                            data: data,
                                            contentType: mimetype
                                        }
                                    })
                                    UserE.save().then((created) => {
                                            console.log('it has be created')
                                            res.redirect('/')
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                            res.redirect('/assignment')
                                        })
                                    User.save().then((created) => {
                                            console.log(created)
                                        })
                                        .catch((err) => {
                                            console.log(err)
                                        })
                                }
                                // END OF MORNING
                            }
                        })
                    }
                    // end the evening conditions
                }
            }
        } else {
            res.render('assignment', { layout: 'index', message: "YOU NEED TO INPUT YOUR FILE TO BE SUBMITTED" })

        }




    } catch (error) {
        console.log(error)
        res.send('error')
    }
})



module.exports = router