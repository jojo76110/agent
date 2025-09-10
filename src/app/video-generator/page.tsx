"use client";

import { useState } from "react";

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("google");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt && !imageUrl) {
      setError("Please provide a text prompt or upload an image.");
      return;
    }
    setLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const response = await fetch("/api/generate/video", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, imageUrl, model, apiKey: "YOUR_API_KEY" }), // Replace with actual API key
      });

      const data = await response.json();

      if (response.ok) {
        setVideoUrl(data.videoUrl);
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (err) {
      console.error("Failed to generate video:", err);
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Text Prompt (optional if image is provided)
          </label>
          <textarea
            id="prompt"
            name="prompt"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., A futuristic cityscape at sunset"
          ></textarea>
        </div>

        <div>
          <label htmlFor="imageUpload" className="block text-sm font-medium text-gray-700">
            Upload Initial Image (optional)
          </label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        {imageUrl && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Uploaded Image:</h3>
            <img src={imageUrl} alt="Uploaded" className="max-w-xs h-auto rounded-md shadow-lg" />
          </div>
        )}

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            AI Model
          </label>
          <select
            id="model"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="google">Google (Model for Video Gen)</option>
            <option value="openai">OpenAI (Model for Video Gen)</option>
            {/* Add other models as they become available */}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Video"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {videoUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Generated Video:</h2>
          <video controls src={videoUrl} className="max-w-full h-auto rounded-md shadow-lg">
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}