const http=require('http');
const fs=require('fs');
const port=8000;
const filename="notes.txt";
http.createServer(function(req, res){
   fs.readFile(`/home/administrator/Desktop/mern5Feb/${filename}`,'utf-8',function(err, data){
    console.log("data",data);
       if(err){
        res.end(`${err.message}`);
       }
       else{
        res.end(`the ${data} in the given file ${filename} ...`);
       }
   })
}).listen(port,function(){
    console.log(`server running on http://localhost:${port}`);
});