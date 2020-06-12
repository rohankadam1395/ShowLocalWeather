const express=require('express');
const app=express();
app.use('/public',express.static(process.cwd()+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(process.cwd()+'/views/index.html');
});

app.listen(8085,()=>{
    console.log("Listening on port 8080");
});