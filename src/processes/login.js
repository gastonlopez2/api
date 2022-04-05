const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');

router.get('/signin',(req, res)=>{
    console.log(req.body);
    res.send('You made a post to signin request');
})

router.post('/signup',async (req, res)=>{
    const {email, password} = req.body;
    const user = new User({email,password});
    await user.save();
    console.log(req.body);
    res.send('You made a post to signup request');
})

module.exports = router;