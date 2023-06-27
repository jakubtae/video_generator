import { Configuration,OpenAIApi } from "openai";
import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

export const openai = new OpenAIApi(configuration)