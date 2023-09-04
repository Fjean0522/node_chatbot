import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

const runBot = async () => {
    console.log(colors.green('NodeWise: ') + 'Greetings! How may I assist you?'); 

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));
    }
};

runBot();