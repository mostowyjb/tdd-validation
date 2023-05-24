import './style.css'
import { validatePassword } from './src/passwordValidator'


const formPage = `
  <div>
    <h1>Password Validation App</h1>
    <input type="password" id="password-input" placeholder="Enter your password">
    <button id="validate-button">Validate</button>
    <div id="result-container"></div>
  </div>
`;
document.querySelector('#app').innerHTML = formPage;
const passwordInput = document.getElementById('password-input');
const validateButton = document.getElementById('validate-button');
const resultContainer = document.getElementById('result-container');

validateButton.addEventListener('click', () => {
  const password = passwordInput.value;
  const validationResult = validatePassword(password);

  if (validationResult.valid) {
    resultContainer.textContent = 'Password valid';
    resultContainer.classList.remove('error');
  } else {
    resultContainer.innerHTML = ''; // Clear any previous error messages

    validationResult.errors.forEach((error) => {
      const errorElement = document.createElement('p');
      errorElement.textContent = error;
      resultContainer.appendChild(errorElement);
    });

    resultContainer.classList.add('error');
  }
});

