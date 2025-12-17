const express = require("express");
const mdb = require("mongoose");
const bcrypt = require("bcrypt"); 
const signup = require("./models/SignupSchema");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8001;

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());


// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/MERN';
mdb.connect(mongoURI)
  .then(() => console.log("MongoDB connection successful"))
  .catch((err) => console.log("MongoDB connection unsuccessful", err));

// Root route
app.get("/", (req, res) => {
    res.send("Backend server started successfully");
});

// Signup route
app.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await signup.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ Message: "Email already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newSignup = new signup({
            email,
            username,
            password: hashedPassword
        });

        await newSignup.save();

        // Return user info including hashed password
        res.json({
            Message: "Signup successful",
            user: {
                _id: newSignup._id,
                email: newSignup.email,
                username: newSignup.username,
                password: newSignup.password // hashed password
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "Error signing up" });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await signup.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ Message: "User not found", isLoggedIn: false });
        }

        const isValidPassword = await bcrypt.compare(password, existingUser.password);

        if (!isValidPassword) {
            return res.status(401).json({ Message: "Incorrect Password", isLoggedIn: false });
        }

        // Successful login: return user info including hashed password
        res.status(200).json({
            Message: "Login successful",
            isLoggedIn: true,
            user: {
                _id: existingUser._id,
                email: existingUser.email,
                username: existingUser.username,
                password: existingUser.password // hashed password
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ Message: "Internal server error", isLoggedIn: false });
    }
});

// JSON route
app.get('/json', (req, res) => {
    res.json({
        College: "SECE",
        Dept: "CYS",
        StuCount: "64"
    });
});

// Serve static HTML
app.get('/static', (req, res) => {
    res.sendFile('C:\\Users\\PAVITHRA\\OneDrive\\Desktop\\MERN\\REACT\\viteBackend\\index.html');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
