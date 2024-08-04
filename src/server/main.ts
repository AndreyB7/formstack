import express from "express";
import ViteExpress from "vite-express";
import "dotenv/config"
import api from "./router/api.ts";

const PORT = parseInt(`${process.env.PORT}`, 10) || 3000;

const app = express();

app.use("/api", api);

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}`)
);
