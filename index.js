let express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('hello word!!');
});

app.get("/user", (req, res)=>{
   res.send({"id":2,"name":"Rakesh Kumar","address":"delhi"})
})



app.listen(3000);