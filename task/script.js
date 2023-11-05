function addQuestion() {
  var formContainer = document.getElementById('form-container');

  // Create question container
  var questionContainer = document.createElement('div');
  questionContainer.classList.add('question-container');

  // Create question input
  var questionInput = document.createElement('input');
  questionInput.type = 'text';
  questionInput.placeholder = 'Enter your question';
  questionContainer.appendChild(questionInput);

  // Create option container
  var optionContainer = document.createElement('div');
  optionContainer.classList.add('option-container');

  // Create answer option input
  var optionInput = document.createElement('input');
  optionInput.type = 'text';
  optionInput.placeholder = 'Enter option';
  optionContainer.appendChild(optionInput);

  // Create add option button
  var addOptionButton = document.createElement('button');
  addOptionButton.textContent = 'Add Option';
  addOptionButton.onclick = function () {
      addOption(optionContainer);
  };
  optionContainer.appendChild(addOptionButton);

  questionContainer.appendChild(optionContainer);

  // Create remove question button
  var removeQuestionButton = document.createElement('button');
  removeQuestionButton.textContent = 'Remove Question';
  removeQuestionButton.onclick = function () {
      formContainer.removeChild(questionContainer);
  };
  questionContainer.appendChild(removeQuestionButton);

  formContainer.appendChild(questionContainer);
}

function addOption(optionContainer) {
  // Create answer option input
  var optionInput = document.createElement('input');
  optionInput.type = 'text';
  optionInput.placeholder = 'Enter option';

  // Create remove option button
  var removeOptionButton = document.createElement('button');
  removeOptionButton.textContent = 'Remove Option';
  removeOptionButton.classList.add('remove-option');
  removeOptionButton.onclick = function () {
      optionContainer.removeChild(optionInput);
      optionContainer.removeChild(removeOptionButton);
  };

  optionContainer.appendChild(optionInput);
  optionContainer.appendChild(removeOptionButton);
}