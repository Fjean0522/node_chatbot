import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

const runBot = async () => {

    console.log(colors.green('NodeWise: ') + 'Greetings! How may I assist you?'); 

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

            if (userInput.toLowerCase() === 'exit') {
                return
            };

        } catch (error) {
            console.error(colors.red(error));
        };
    };
};

runBot();