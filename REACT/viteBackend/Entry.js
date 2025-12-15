const express = require("express");
const mdb = require("mongoose");
const signup = require("module");
const hashedPassword = await bcrypt(password, 10)
const app = express();
const port = 8001;

mdb.connect('mongodb://localhost:27017/MERN').then(() => {
    console.log("MongoDB connection successful");
}).catch((err) => {
    console.log("MongoDB connection unsucessful");
})
 
app.get("/", (req, res) => {
    res.send("Backend server started successfully");
});

app.post('/signup',(req, res)=>{
    const{email,username,password} = req.body;
    const newSignup = new signup({
        email:email,
        username:username,
        password:password
    })

newSignup.save
res.json({"Message":"Signup successfull"})
})

app.get('/json', (req, res) => {
    res.json({
        "College" : "SECE",
        "Dept" : "CYS",
        "StuCount" : "64"
    });
})

app.get('/static', (req, res) => {
    res.sendFile('C:\\Users\\PAVITHRA\\OneDrive\\Desktop\\MERN\\REACT\\viteBackend\\index.html');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
