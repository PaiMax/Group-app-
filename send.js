const express=require('express');
const router=express.Router();
const fs=require('fs');
const { get } = require('http');
router.get('/',(req,res,next)=>{
    fs.readFile('chat.txt',(err,data)=>{
        console.log(typeof(data));
        

        
        res.send(`<h2>${data}</h2><form onsubmit ="document.getElementById('username').value=localStorage.getItem('username')"action ="/" method="POST" ><input type="text" name="message"><input type="hidden" id="username" name="username"> <button type="submit" >send</button></form>`);
    })
    
})
router.post('/',(req,res,next)=>{
    const data=`${req.body.username}:${req.body.message}.     `;
    

    fs.appendFile("chat.txt",data,(err)=>console.log(err));
    res.redirect('/');
  

})
module.exports=router;