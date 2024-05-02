<<<<<<< HEAD
const express = require("express");
const cors=require("cors")//cross origin resource sharing;
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const dotenv = require("dotenv");
dotenv.config();
// const port = 8080;
console.log("process.env.PORT = ",process.env.PORT);
//require user route
const userRoute=require("./routes/user.route")
app.use('/',userRoute)
app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${process.env.PORT}`);
  }
});
=======
const http=require('http');
const fs=require('fs');
const port=8000;
const filename="notes.txt";
http.createServer(function(req, res){
   fs.writeFile(`/home/administrator/Desktop/mern5Feb/${filename}`,"Morning mern stack class by durgesh sir",function(err, data){
    console.log("error",err);
       if(err){
        res.end(`${err.message}`);
       }
       else{
        res.end(`the ${filename} file was created successfully and written something.`);
       }
   })
}).listen(port,function(){
    console.log(`server running on http://localhost:${port}`);
});
>>>>>>> 9295f4605f69626dcd54009e11a97c911e4986c3
