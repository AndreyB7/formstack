import express from "express";
import formstack from "../formstack/formstack.ts";

const api = express.Router();

api.use(express.json());

api.post('/submit', async (_req, res) => {
  const handleFormResult = await formstack(_req.body);
  res.json(handleFormResult);
});

export default api;