# Multi-functional AI Content Generator

This project is a multi-functional AI content generation platform that supports text-to-image, image-to-image, and video generation capabilities. It integrates various AI model APIs and features a modern, intuitive, and responsive user interface.

## Features

- **Text-to-Image Converter**: Generate images from textual descriptions.
- **Image-to-Image Editor**: Modify existing images based on prompts.
- **Video Generation Tool**: Create short video clips from text or images.
- **API Key Management Interface**: Securely manage API keys for different AI services.

## Integrated AI Services (API Key Support)

- Google Gemini 2.5 Flash Image
- OpenAI ChatGPT (for text-based interactions, DALL-E for image generation)
- Anthropic Claude
- DeepSeek / Qwen and other mainstream Chinese AI services

## Technology Stack

- **Frontend**: Next.js (React Framework)
- **Backend**: Node.js (via Next.js API Routes)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-generator.git
   cd ai-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```

### Running Locally

1. Start the development server:
   ```bash
   npm run dev
   # or yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### API Key Configuration

Navigate to the "API Keys" section in the application to enter and save your API keys for the respective AI services. For production environments, consider using environment variables for sensitive keys.

## Deployment to Vercel

This project is configured for one-click deployment to Vercel.

1. **Fork this repository** to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
3. Click on "New Project" and import your forked repository.
4. Vercel will automatically detect the Next.js project and configure the build settings. Ensure the root directory is set to `/` (or the directory containing `package.json` if you nested the project).
5. Click "Deploy".

For managing environment variables (like API keys) in Vercel, refer to the [Vercel Environment Variables documentation](https://vercel.com/docs/concepts/projects/environment-variables).

## Project Structure

```
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── generate/
│   │   │   │   ├── image-to-image/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── text-to-image/
│   │   │   │   │   └── route.ts
│   │   │   │   └── video/
│   │   │   │       └── route.ts
│   │   │   └── api-keys/
│   │   │       └── page.tsx
│   │   ├── image-to-image/
│   │   │   └── page.tsx
│   │   ├── text-to-image/
│   │   │   └── page.tsx
│   │   ├── video-generator/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
