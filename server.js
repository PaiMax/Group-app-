const express=require('express');
const app =express();
const loginRoutes=require('./login');
const sendRoutes=require('./send');
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use('/login',loginRoutes);
app.use('/',sendRoutes);



app.listen(3000);