const express = require("express");
const app = express();
const port = 8001;

app.get("/", (req, res) => {
    res.send("Backend server started successfully");
});

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
