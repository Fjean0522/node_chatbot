import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';
import { welcomeMessage, goodbyeMessage } from './config/dialog.js';

const runBot = async () => {
    console.log(welcomeMessage); 

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            // Send user input as Request to API
            const completionRequest = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }]
            });

            // Get Response
            const completionResponse = completionRequest.choices[0].message.content;

            console.log(colors.green('NodeWise: ') + completionResponse);

        } catch (error) {
            console.error(colors.red(error));
        }
    }
};

runBot();