const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hi there!');
});

app.listen(3000, ()=>{
    console.log('Listening on port 3000...');
})