"use client";

import { useState } from "react";

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState({
    google: "",
    openai: "",
    anthropic: "",
    deepseek: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApiKeys((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real application, you would save these keys to a secure backend
    // or browser storage (e.g., localStorage).
    // For this example, we'll just log them to the console.
    console.log("API Keys saved:", apiKeys);
    alert("API Keys saved successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Key Management</h1>
      <div className="space-y-4">
        <div>
          <label htmlFor="google" className="block text-sm font-medium text-gray-700">
            Google Gemini
          </label>
          <input
            type="password"
            id="google"
            name="google"
            value={apiKeys.google}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="openai" className="block text-sm font-medium text-gray-700">
            OpenAI ChatGPT
          </label>
          <input
            type="password"
            id="openai"
            name="openai"
            value={apiKeys.openai}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="anthropic" className="block text-sm font-medium text-gray-700">
            Anthropic Claude
          </label>
          <input
            type="password"
            id="anthropic"
            name="anthropic"
            value={apiKeys.anthropic}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="deepseek" className="block text-sm font-medium text-gray-700">
            DeepSeek/Qwen
          </label>
          <input
            type="password"
            id="deepseek"
            name="deepseek"
            value={apiKeys.deepseek}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          onClick={handleSave}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Keys
        </button>
      </div>
    </div>
  );
}