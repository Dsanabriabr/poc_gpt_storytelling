const express = require('express');
const { generateText } = require('./openai');
const app = express();

app.get('/', async (req,res) => {
    const text = await generateText('Hello, OpenAI! Create a story for a hero named Daniel who lives in Miami fighting agains vilains');
    res.send(text);
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));