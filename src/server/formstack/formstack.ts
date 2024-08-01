import { getAllSubmission, insertSubmission } from "../../db/schema.ts";


const formstack = async (body: any) => {
  await insertSubmission({json: JSON.stringify(body)})
  const submissions = await getAllSubmission()
  return {message: JSON.stringify(submissions)}
}

export default formstack;