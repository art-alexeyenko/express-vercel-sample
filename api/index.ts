import express from 'express';
const app = express();

app.get("/", (_, res) => res.send("Express on Vercel"));

// port 3000 conflicts with port used by vercel dev
app.listen(3001, () => console.log("Server ready on port 3001."));
