"use client";

import { useState } from "react";

export default function TextToImagePage() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("google"); // Default model
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await fetch("/api/generate/text-to-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, model }), // API key is handled by the backend
      });

      const data = await response.json();

      if (response.ok) {
        setImageUrl(data.imageUrl);
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (err) {
      console.error("Failed to generate image:", err);
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Text-to-Image Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
            Prompt
          </label>
          <textarea
            id="prompt"
            name="prompt"
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your text prompt here..."
            required
          ></textarea>
        </div>
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
            <option value="google">Google Gemini 2.5 Flash Image</option>
            <option value="openai">OpenAI DALL-E</option>
            <option value="anthropic">Anthropic (if supported for image gen)</option>
            <option value="deepseek">DeepSeek/Qwen (if supported for image gen)</option>
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Generated Image:</h2>
          <img src={imageUrl} alt="Generated" className="max-w-full h-auto rounded-md shadow-lg" />
        </div>
      )}
    </div>
  );
}