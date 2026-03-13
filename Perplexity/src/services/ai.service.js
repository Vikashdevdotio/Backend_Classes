import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY
});

export async function testAi() {
    model.invoke("What is AI explain under 100 words?")
        .then((response) => {
            console.log(response.text);
        })
}