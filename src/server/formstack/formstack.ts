import { getAllSubmission, InsertSubmission, insertSubmission } from "../../db/schema.ts";
import { sendMail } from "../services/mailerService.ts";
const smtpConfig = {
  email: process.env.SMTP_EMAIL as string,
}

const addSubmission = async (body: InsertSubmission) => {
  await insertSubmission({
    email: body.email,
    json: JSON.stringify(body)
  })
  try {
    await sendMail(smtpConfig.email,'New Form Submission',`<div>${JSON.stringify(body)}</div>`)
  } catch (e) {
    const error = e as Error;
    return {message: error.message}
  }
  return {message: 'Sucsess!'}
}

export const getAllSubmissions = async () => {
  return await getAllSubmission();
}

export {
  addSubmission,
  getAllSubmission,
}