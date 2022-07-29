const express = require('express');
const app = require('express')();

app.use(express.static('public'));

app.listen(8080, ()=>{
    console.log('app listen in http://localhost:8080');
})