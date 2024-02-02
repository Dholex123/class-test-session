// using http

// const http = require('http');
//  http.createServer((req, res) =>{
//  res.end("Horray, we have created first server");
// }).listen(400);
// const port = 3000;
//  const hostname = '127.0.0.1'
//  const myServer = http.createServer((req, res) => {
//      res.writeHead (250 , {'content-type':'text/html'});
//      res.write ('<h1>Hello.Nodex.js</h1>');
//      res.end();
//      });
// myServer.listen(port, hostname, ()=>{
//     console.log(`Server has been successfully created at http://${hostname}:${port}`);
//  });


//  using fs

const fs = require('fs');
fs.writeFile('dema', "Hello, Node Js!", function (dawa){
    if(dawa){
        console.log(dawa)
    }else{
        console.log("This is our New File")
    }
})

fs.rename('dema',"yoezer", function (dawa){
    if(dawa){
        console.log(dawa)
    }else{
        console.log("This is our new file")
    }
})
