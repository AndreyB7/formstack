import express from "express";
import { addSubmission, getAllSubmissions } from "../formstack/formstack.ts";

const api = express.Router();

api.use(express.json());

api.post('/submit', async (_req, res) => {
  const handleFormResult = await addSubmission(_req.body);
  res.json(handleFormResult);
});

api.get('/submissions', async (_req, res) => {
  res.json(await getAllSubmissions());
});

export default api;