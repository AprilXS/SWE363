const readline = require('readline');

// Predefined questions and answers
const responses = {
  'hi': 'Hi, thank you!',
  'your name?': 'simple chatbot.',
  'created by?': 'I was created by Hamza.',
  'exit': 'Goodbye! Have a great day!',
  'quit': 'Goodbye! Have a great day!',
};

// Function to get a response based on user input
function getResponse(userInput) {
  return responses[userInput] || "I'm sorry, I don't understand that.";
}

// Create an interface for reading from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to continuously prompt the user for input
function promptUser() {
  rl.question('You: ', (userInput) => {
    // Check if the user wants to exit
    if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
      console.log(getResponse(userInput));
      rl.close();
    } else {
      // Get and display the response
      const response = getResponse(userInput);
      console.log('Chatbot:', response);

      // Continue prompting the user
      promptUser();
    }
  });
}

// Start the conversation
console.log('Chatbot: Hello! Ask me anything or type "exit/quit" to end.');
promptUser();
