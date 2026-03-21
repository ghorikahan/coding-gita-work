const http = require("http");

const arr =
    [
        {
            "studentName": "ABDUL HAQUE",
            "University": "SUxCG 714",
            "UniversityUID": "108444"
        },
        {
            "studentName": "ADITYA KUMAR",
            "University": "SUxCG 702",
            "UniversityUID": "108716",
        },
        {
            "studentName": "AMAN KUMAR",
            "University": "SUxCG 702",
            "UniversityUID": "108500"
        },
        {
            "studentName": "AMRIT RAJ",
            "University": "SUxCG 702",
            "UniversityUID": "108587"
        },

    ]


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify([{ id: 1, name: "Arjun" }]));
    }
    res.end("Server is running on 3000");
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});