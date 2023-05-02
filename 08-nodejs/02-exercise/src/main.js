import express from "express";
const webServer = express();

// code down below

webServer.get('/', (req, res) => {
    res.json("This is Root Route");
});

webServer.get('/news', (req, res) => {
    res.json(
        [
            {
                name: "news 1",
                detail: "detail 1"
            },
            {
                name: "news 2",
                detail: "detail 2"
            },
            {
                name: "news 3",
                detail: "detail 3"
            }
        ]
    );
});

webServer.get('/users', (req, res) => {
    res.json(
        [
            { userId: "mock-id-1" },
            { userId: "mock-id-2" },
            { userId: "mock-id-3" },
        ]
    );
});

webServer.get('/me', (req, res) => {
    res.json({
        name: "mock-name",
        role: "user",
        picture: "https://shorturl.at/qtFJM"
    });
});

webServer.get('/health-check', (req, res) => {
    res.json("Server is fine!")
});

webServer.listen(3001);