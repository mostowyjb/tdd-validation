// passwordValidation.js
export function validatePassword(password) {
    const validationResult = {
      valid: true,
      errors: [],
    };
  
    if (password.length < 8) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit comporter au moins 8 caractères');
    }

    const digitCount = password.match(/[0-9]/g)?.length || 0;
    console.log(digitCount);
    if (digitCount < 2) {
      validationResult.valid = false;
      validationResult.errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    } 

    const upperCaseCount = password.match(/[A-Z]/g)?.length || 0;

    if (upperCaseCount === 0) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit contenir au moins un caractère spécial');
    }
  
    return validationResult;
}