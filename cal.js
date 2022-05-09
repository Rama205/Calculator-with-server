const express= require('express')
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',((req,res)=>{
 res.sendFile(__dirname +"/cal.html")
}));

app.post('/',((req,res)=>{
    var fVal=req.body.fVal;
    var sVal=req.body.sVal
    var result = fVal+sVal;
    res.send("result",result) 
}))
app.listen(3000,(()=>{
    console.log("loded");
}))