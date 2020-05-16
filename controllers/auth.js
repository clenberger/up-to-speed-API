const express = require('express');
const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const router = express.Router();



// SIGN UP
router.post("/sign-up", (req, res) => {

    const user = new User(req.body);

    user.save().then(user => {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
        res.cookie('nToken', token, { maxAge: 900000 , httpOnly: true });
        res.json({'jwt-token': token})
        console.log("new sign-up token: " + token)
        }).catch(err => {
        console.log(err.message);
        return res.status(400).send({ err: err });
        });
})


// LOGIN
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // find the username
    User.findOne({ username }, "username password")
        .then(user => {
            if (!user){
            // user not found
            return res.status(401).send({ message: "wrong username or password" });
            }
            // check the password
            user.comparePassword(password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(401).send({ message: "wrong username or password" });
            }
            // create a token
            const token = jwt.sign({ _id: user._id, username: user.username }, process.env.SECRET, {
                expiresIn: "60 days"
            });
            // set a cookie and redirect to root
            res.cookie("nToken", token, { maxAge: 900000, httpOnly: true });
            res.json({'login:': 'great success', 'user-signed-in:': user})
            });              
        }).catch(err => {
            console.log(err);
        });
});

// LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
});

module.exports = router;