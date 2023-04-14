const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    organization: "org-dutIlgONxGYBchYFSwnaIsiL",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration)

async function generateText(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\"\"\""],
    });

    return response.data.choices[0].text.trim();
}

module.exports = { generateText };