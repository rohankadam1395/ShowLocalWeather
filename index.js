const express=require('express');
const app=express();
let port=process.env.PORT;
if(port==null||port==""){
port=8085;
}
app.use('/public',express.static(process.cwd()+'/public'));
app.get('/',(req,res)=>{
    res.sendFile(process.cwd()+'/views/index.html');
});

app.listen(port,()=>{
    console.log("Listening on port 8085");
});