import openai from './config/openai.js';
import readlineSync from 'readline-sync';
import colors from 'colors';

const runBot = async () => {

    // Chat history storage
    const chatHistory = [];

    console.log(colors.green('NodeWise: ') + 'Greetings! How may I assist you?'); 

    while (true) {
        const userInput = readlineSync.question(colors.yellow('You: '));

        try {
            // Add user input to chat history
            chatHistory.push({ role: 'user', content: userInput });

            // Send chat history to the API 
            const completionRequest = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: chatHistory,
            });

            // Get Response
            const completionResponse = completionRequest.choices[0].message.content;

            console.log(colors.green('NodeWise: ') + completionResponse);

            chatHistory.push({ role: 'assistant', content: completionResponse });

            if (userInput.toLowerCase() === 'exit') {
                return
            };

        } catch (error) {
            console.error(colors.red(error));
        };
    };
};

runBot();