const express = require('express');
const path = require('path');

const app = express();
const port = 2001;

const staticPath = path.join(__dirname,'../public');

app.use('/css', express.static(staticPath+'/css'));
app.use('/js', express.static(staticPath+'/js'));
app.use('/images', express.static(staticPath+'/images'));
app.use(express.static(staticPath));

// app.get('/', (req,res)=>{
//     //res.send();
//     //console.log('Welcome to console');
// });

app.listen(port, ()=>{
    console.log(`Server is connected to port: ${port}`);
});