import express from "express";
import path from "path";
import mongoose  from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

import routes from "./routes/trip.routes.js"

dotenv.config();

const port = process.env.PORT || 7000;

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;



const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(connectionString);

const __dirname = process.cwd();
const server = express();

server.use(cors());
server.use(express.json());

server.use('/api', [routes]);

// server.get("/api", (req, res) => {
//   res.json({ message: "Capstone Project in progress..." });
// });


server.use(express.static(path.join(__dirname, "./client/dist")));

server.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

server.listen(port, () =>
  console.log(`Server is up and running on port ${port}`)
);
