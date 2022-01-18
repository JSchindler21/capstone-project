import express from "express";
import { dirname } from "./lib/pathHelpers.js";
import path from "path";

const __dirname = dirname(import.meta.url);

const server = express();

server.use(express.json());

const port = process.env.PORT || 7000;

server.get("/api", (req, res) => {
  res.json({ message: "" });
});

//Static assets (images, css, js)
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

server.listen(port, () =>
  console.log(`Server is up and running on port ${port}`)
);