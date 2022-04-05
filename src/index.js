require('./models/User');
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const login = require('./processes/login');
const mongoUri = 'mongodb+srv://gastonLopez:abcd1234@cluster0.hdtrk.mongodb.net/test';

app.use(bodyParser.json());
app.use(login);

mongoose.connect(mongoUri);

mongoose.connection.on('connected',()=>{
    console.log('connected to mongo instance');
});

mongoose.connection.on('error',(err)=>{
    console.log('errors occured: ', err);
});

app.get('/', (req, res)=>{
    res.send('Hi there!');
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000...');
})