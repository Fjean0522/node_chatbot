# nodewise
Nodewise is a terminal-based chatbot, Built using Node.js and utilizes the OpenAI API to enable human-like conversational interactions.  The bot can respond to questions and compose various written content, including articles, social media posts, essays, code, and emails.

## Features
Nodewise offers a range of features to enhance your conversational experience:

* **Content Generation**:  
  Utilize Nodewise to generate various types of content, including articles, social media posts, essays, code snippets, and emails.
* **Question & Answer**:  
  Ask Nodewise questions, and it will provide answers to the best of its knowledge.
* **Casual Conversation**:  
  Engage in friendly, casual conversations with Nodewise.

  
**Examples**  
Here are some examples of how you can interact with Nodewise:  

**Content Generation**:  
![Chatbot Screenshot](/images/code.png)  

**Question & Answer**:  
![Chatbot Screenshot](/images/question.png)  

**Casual Conversation**:  
![Chatbot Screenshot](/images/casual_convo.png)

## Installation
Before you can start using NodeWise, you'll need to set it up on your system. Please follow these instructions:

#### Prerequisites
* **Node.js**:  
Ensure you have Node.js installed on your computer. You can download it from https://nodejs.org/.

#### Setup
* Clone this repository to your local machine
* Navigate to the project directory
* Install the necessary Node.js packages  
  `npm install`
* Create an OpenAI API key:
   * Visit https://beta.openai.com/signup/ to sign up for an OpenAI account if you don't have one.  
     Once you have an account, generate an API key.
* Set your OpenAI API key as an environment variable:
   * Create a .env file in the project directory.
   * Inside the .env file, add your API key:  
   `OPENAI_API_KEY='your-api-key-goes-here'`
* Save the .env file.

#### Usage
Now that you have successfully set up Nodewise, you can start using it in your terminal.

**Run Nodewise in your terminal**:  
`npm start`

To exit Nodewise, simply type `exit`
