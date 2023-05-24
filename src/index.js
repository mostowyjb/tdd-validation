import { validatePassword } from './passwordValidator.js';

const password = 'myPassword123';
const validationResult = validatePassword(password);
console.log(validationResult);