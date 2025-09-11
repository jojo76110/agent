import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt, model } = await request.json();

    if (!prompt || !model) {
      return NextResponse.json(
        { error: "Missing required parameters: prompt, model" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is not configured on the server. Please set the GOOGLE_API_KEY environment variable." },
        { status: 500 }
      );
    }

    console.log(`Generating image with prompt: \"${prompt}\" using ${model}`);

    // Simulate a real API call. Replace this with your actual image generation logic.
    // For this example, we'll return a dynamic image from a placeholder service based on the prompt.
    const imageUrl = `https://source.unsplash.com/featured/?${encodeURIComponent(prompt)}`;

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("Error in text-to-image API:", error);
    return NextResponse.json(
      { error: "An internal server error occurred" },
      { status: 500 }
    );
  }
}
