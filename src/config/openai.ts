import OpenAI from 'openai';

// Initialize the OpenAI client with the API key from environment variables
// Using dangerouslyAllowBrowser since we're only running in localhost
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only use this for local development
});

export default openai;
