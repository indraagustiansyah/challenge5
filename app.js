const { application } = require("express");
const express = require("express");
require("dotenv").config();

const bodyParser = require("body-parser"); // Middleware
const PORT = process.env.PORT;

const app = express();

const datas = require("./data/login.json");


app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static("./public"));

app.use("/landing", express.static("./public/cp3"));
app.use("/games", express.static("./public/cp4"));

app.get("/data", (req, res, next) => {
  res.status(200).send(datas);
});

//methode POST
// use Body > x-www-form-urlendcoded
// key : username dan password
app.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  //res.send(`Username: ${username} Password: ${password}`);

  if (!username || !password) {
    res.status("400");
    res.send("Username or Password not found");
  }else{
    
     const data = datas.find((value) => 
       value.username === String(username)
    ) 
      
    try{
        console.log(username)
        if (data.password === password) {
            return res.status(200).json({
              code: 200,
              message: "Sukses Login",
              error: "null",
            });
          }else  {
            return res.status(400).json({
              code: 400,
              message: "Login Failed",
              error: "Password Not Match",
            });
         
          }
    }
    catch(err) {
        return res.status(400).json({
            code: 400,
            message: "Username not Found",
            error: err.message + " because username not found",
          });
    }
   
        
     
  } 
});

app.use("*", (req, res, next) => {
  res.status(400).send("<h1>Page Not Found</h1>");
});
app.listen(PORT, () => {
  console.log(`Server Running in Port ${PORT}`);
});
