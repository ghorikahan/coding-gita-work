const express = require('express');
const { default: mongoose } = require('mongoose');
const { type } = require('node:os');
const { deflate } = require('node:zlib');
const { boolean } = require('webidl-conversions');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://Kahanghori:181920@cluster0.fykr7da.mongodb.net/?appName=Cluster0")
    .then(() => console.log("mongoDB connected succesfully"))
    .catch(err => console.log(err.message));


app.get('/', (req, res) => {
    res.send("server started succesfully");
})


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    role: {
        type: String,
        enum: ["Student", "Mentor", "Admin"],
        default: "Student"
    },
    course: {
        type: String,
        enum: ["MERN", "Java", "Python", "Data Science"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const students = mongoose.model("student", studentSchema);

app.post("/student", async (req, res) => {
    try {
        const data = new students(req.body);
        await data.save();
        console.log(data);
        res.status(200).json({ message: "added the data", data });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
});

app.post("/student/bulk", async (req, res) => {
    try {
        const data = new students(req.body);
        await data.insertMany();
        console.log(data);
        res.status(200).json({ message: "added the data", data });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/students", async (req, res) => {
    try {
        const allStudents = await students.find({});
        res.status(200).json({ allStudents });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/users/:id", async (req, res) => {
    const studentID = Number(req.params.id);
    const studentID1 = await Users.findById(studentID);

    if (!studentID) {
        return res.status(404).json({ message: "student not found" });
    }

    res.status(200).json(studentID1);
});

app.get("/students/course/:courseName", async (req, res) => {
    try {
        const courseName = req.params.courseName;
        const students = await students.find({ course: courseName });

        res.status(200).json(students);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.listen(3000, () => {
    console.log("server started running on port 3000");
});