import express from "express";
import { apiRouter } from "./routes/apiRouts.js";
import cors from "cors";

const PORT = 8000;

const server = express();

server.use(cors());

server.use("/api", apiRouter);

server.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

server.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});
