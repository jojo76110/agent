import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return new Response("Error: Missing GOOGLE_API_KEY environment variable.", { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
    });

    const streamingResponse = await model.generateContentStream(prompt);

    return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return new Response("An unexpected error occurred. Please check the server logs.", { status: 500 });
  }
}