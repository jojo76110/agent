import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">
        Multi-functional AI Generator
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Text-to-Image</h2>
          <p className="mb-4">
            Generate stunning images from textual descriptions.
          </p>
          <Link
            href="/text-to-image"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Go to Generator &rarr;
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Image-to-Image</h2>
          <p className="mb-4">
            Modify existing images based on your instructions.
          </p>
          <Link
            href="/image-to-image"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Go to Editor &rarr;
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Video Generation</h2>
          <p className="mb-4">Create short video clips from text or images.</p>
          <Link
            href="/video-generator"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Go to Tool &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
