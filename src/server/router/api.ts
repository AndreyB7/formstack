import express from "express";
import formstack from "../formstack/formstack.ts";

const api = express.Router();

api.post('/submit', (_req, res) => {
  const handleFormResult = formstack(_req.body);
  res.json(handleFormResult);
});

export default api;