const express=require('express');
const bodyParser=require('body-parser');
const app=express();


app.use(bodyParser.urlencoded({extended:false}));
 
app.use('/add-product',(req,res)=>{
    res.send(`<form  action= "/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">ADD</button></from>`)
})
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
   res.send('<h1> Hello from Express!</h1>');

})

app.listen(3000,()=>{
    console.log('server has been started at port 3000');
})