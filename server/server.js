import express from "express";
import path from "path";
import mongoose  from "mongoose";
import dotenv from 'dotenv';
import { dirname } from "./lib/pathHelpers.js";

import routes from "./routes/trip.routes.js"

const __dirname = dirname(import.meta.url);
const server = express();

server.use(express.json());
dotenv.config();

const connectionString = 'mongodb://localhost:27017/';
mongoose.connect(connectionString);

const port = process.env.PORT || 7000;


server.use('/api', (routes));

server.get("/api", (req, res) => {
  res.json({ message: "Capstone Project in progress..." });
});

//Static assets (images, css, js)
server.use(express.static(path.join(__dirname, "../client/dist")));

server.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

server.listen(port, () =>
  console.log(`Server is up and running on port ${port}`)
);
