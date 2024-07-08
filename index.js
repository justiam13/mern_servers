/*import http from 'http';
const http = require("http")
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text-plain'});
    response.end('Hello world \n');
}).listen(3001,() => 
    console.log("Server Lite at http://localhost:3001/"));
/portnumber,errorhandling */
//const fs =require ("fs")
/*const filedata =fs.readFileSync('read.txt')
console.log(filedata.toString())
console.log("Execution completed") 
fs.readFile('read.txt',function (ferr ,filedata){
    if (ferr) return console.error(ferr)
    console.log(filedata.toString())

})
console.log("Execution successful")
console.log("This is first function")
setTimeout(function(){
    console.log("this is second function")
},5000)
console.log("this is third function")
const {Socket }=require('dgram')
const net =require('net')
const server =net.createServer((socket)=>{
    socket.on('data',()=> {
        console.log("socket closed")
    })
})
server.listen(8000)
const value =(str) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                if (typeof str == 'string')
                {
                    resolve("promise initiated"+str)
                }
                reject("the data is not string type")
        },3000)
        
        
    })
}
value("Function 1").then((myvalue)=> {
    console.log(myvalue)
    return value("Function 2")
}).then((myvalue)=> {
    console.log(myvalue)
})
const events = {
  name:'Party',
  guests:['ram','raju'],
  printGuest(){
    console.log('Guest Lust for '+this.name)
    this.guests.forEach((guest)=> {
        console.log(guest+'is attending '+this.name)
    })
  }
}
events.printGuest()

const http = require('http');
const superagent = require('superagent');
(async () => {
    const data = {
        username: 'raju',
        password: '1234',
        userid: 1011
    };
    try {
        const { body } = await superagent
            .post('https://jsonplaceholder.typicode.com/posts')
            .send(data);
        console.log(body);
    } catch (err) {
        console.error('Error occurred:', err.message || err);
    }
})();
const axios =require('axios')
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((res)=>console.log(res.data)).catch((err) =>
console.log(err.message || err))
const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');

// Create the server
const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const path = parsedUrl.pathname;
    const method = request.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    request.on('end', () => {
        buffer += decoder.end();

        if (method === 'post' && path === '/user') {
            const data = JSON.parse(buffer);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "User data received", data }));
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ message: "Not Found" }));
        }
    });
});

// Start the server
server.listen(8000, () => {
    console.log('Server is running on port 8000');

    // Make the axios POST request
    const axios = require('axios');
    const data = {
        username: 'abhi',
        password: '1234',
        userid: 1001
    };

    axios.post('http://localhost:8000/user', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Error: ' + (err.message || err));
        });
});*
const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>{
    fs.unlink('read.txt',(err)=> {
        if (err) throw err
        console.log('file removed')
    })
}).listen(3001)
 if (req.method=='GET') {
        res.send("Get method is initiated")
    }else if (req.method=='POST') {
        res.json({
            message:"product data received",
            data:req.body
        })
    }else {
        res.send("Invalid method")
    }
})*
const express =require('express')
const app =express()
const router =express.Router()
const port =8080
const homeApi =require('./routes/home')
const loginApi =require('./routes/login')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',homeApi)
app.use('/',loginApi)*/

/*app.use(express.json())//data will be display in express
app.use(express.urlencoded({extended:true}))
const reqFunction =(req,res,next)=> {
    console.log(`Received a ${req.method},requested to api ${req.url}`)
    next()
}
const formDataFun=(req,res,next)=> {
    const {name,pass} =req.body
    console.log(req.body)
    req.name=name
    req.pass=pass
    next()
}
const userShow =(req,res) => {
    res.send(
        `<h1> Name: ${req.name},pass:${req.pass}</h1>
    `)
}
app.get('/ login',reqFunction,(req,res)=> {
    res.send (
    `<form method="post" action="/login-auth">
        <input type="text" name="name" required/>
        <input type="password" name="pass" required/>
        <button type="submit">Submit</button>
        </form>`) 
})
app.post('/login-auth',reqFunction,formDataFun,userShow)
/*app.use("/abc",(req,res,next)=>{
    console.log("middleware 1 is initiated")
    setTimeout(()=> {
        next()

    },8000)
},
(req,res,next)=> {
    res.send(
        `<div>
        <h1>Welcome</h1><p>hello user</p>
        </div>`
    )
}


)*
   
const LocalDB ={
    "item":"iphone",
    "price":"60k",
    "model":"13 pro",
    "color": "white"

}
app.get('/product',(req,res)=>{
    const data=req.body
    
    res.json(LocalDB)
    //req.end()
})
app.post('/product',(req,res)=>{
    const data=req.body

    res.json({
        message:"product data received",
        itemData:data
     } )
})
app.patch('/product',(req,res)=>{
    const data=req.body

    res.json({
        message:"product data received",
        itemData:data
     } )
    })

app.options('/product',(req,res)=>{
    res.json({
        message:"options in this method",
        allowedMethods:"GET,PATCH,PUT,DELETE,OPTIONS,POST"
    })
})*
app.listen
})*
const express =require('express')
const session = require('express-session')
const app = express()
const port =3001
app.use(express.json())

*app.use(session({
    secret:'itsSecret',
    resave:false,
    saveUninitialized:true,
}))
app.get('/login',(req,res)=>{
    req.session.sessionData ={name:'raju',userid:95,email:'raju@gmail.com'}
    res.send(`<h1> You logged in</h1>  <a href ="/profile">Profile</a>`)
})
app.get('/profile',(req,res)=>{
    const data=req.session.sessionData
    res.send(`<h1> Welcome ${data.name}</h1>
    <p> E-mail is :${data.email}</p>`)
})
app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.send('logged out')
})*
app.get('/',(req,res)=> {
    try {
        throw new Error('server died')

    }catch(err) {

    }
})


app.listen(port,()=>{
    console.log(`Server is live on port ${port}`)
})

/*const express=require('express')
const app=express()
const port=3001
app.use(express.json())
const products =[
    {
        id:1,
    name:"IPHONE",
    color:"white"
    },
    {
        id:2,
        name:"mi",
        color:"balck"
        },
        {
            id:3,
            name:"samsung",
            color:"blue"
            }
]
app.get('/products',(req,res)=> {
    res.json(products)
})
app.put('/products',(req,res)=>{
    const {id,name}=req.body//we can able to receive the data
    console.log(id,name)
    return res.send('data stored')

    
})
app.get('/products/:id',(req,res)=> {
    const newData =products.filter(item => item.id.toString()===req.params.id)
    return res.send(newData)
})
app.listen(port,()=>{
    console.log(`server is running....`)
})*/



const express = require('express');
const mongoose = require('mongoose');
const {ApolloServer,gql} = require('apollo-server-express');
const typeDefs =require('./schema')
const resolvers=require('./resolvers')
const userApiFromRoouter =require('./routes/userRoutes')
const app = express();
const port = 3001
const url = "mongodb+srv://Gayatri:setky0-sigvoM-kurcen@cluster0.zpdeidm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(express.json())//parsing
mongoose.connect(url).then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)});
//start my apollo Express server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRoouter)
            
 
async function  StartServer(){
    await server.start();
    server.applyMiddleware({app});//run my express code
    app.listen(port,()=>{
        console.log('server live 3001');
    })
}

StartServer();

