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