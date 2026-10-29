import express from "express";

const app = express();

const PORT = 3000;

const resources = [
    {
        id: 1,
        title: "Introduction to Algorithms",
        type: "Recording",
    },
    {
        id:2,
        title: "System Design",
        type: "Recording"
    }
];

app.get("/api/resources", (req, res) => {
        res.json({
            data:resources,
        });
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});

export default app;