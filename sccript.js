document.addEventListener('DOMContentLoaded', function() {
  const chatLog = document.getElementById('chat-log');
  const userInput = document.getElementById('user-input');
  
  function scrollToBottom() {
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function addBotMessage(message) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerHTML = `<strong>Bot:</strong> ${message}`;
    chatLog.appendChild(botMessage);
    scrollToBottom();
  }

  function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerHTML = `<strong>User:</strong> ${message}`;
    chatLog.appendChild(userMessage);
    scrollToBottom();
  }

  function processUserInput() {
    const userInputValue = userInput.value.trim();
    if (userInputValue !== '') {
      addUserMessage(userInputValue);
      userInput.value = '';

      // Call your backend API or perform document search logic here
      // Example: Retrieve answer from internal documents based on user query
      const botResponse = searchInternalDocuments(userInputValue);

      addBotMessage(botResponse);
    }
  }

  function searchInternalDocuments(query) {
    // Example implementation: Dummy data for internal documents
    const internalDocuments = [
      {
        question: 'What is the policy renewal process?',
        answer: 'The policy renewal process involves...'
      },
      {
        question: 'How can I file a claim?',
        answer: 'To file a claim, follow these steps...'
      },
      // Add more internal documents/questions and answers here
    ];

    // Perform search logic based on the user query
    const matchedDocument = internalDocuments.find(document => document.question.toLowerCase() === query.toLowerCase());

    if (matchedDocument) {
      return matchedDocument.answer;
    } else {
      return 'I am sorry, but I couldn\'t find an answer to your question.';
    }
  }

  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      processUserInput();
    }
  });

  // Example initial bot greeting
  addBotMessage('Hello! How can I assist you today?');
});
