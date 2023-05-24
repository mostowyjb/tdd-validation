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
    if (digitCount < 2) {
      validationResult.valid = false;
      validationResult.errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    } 
    if (!/[A-Z]/.test(password)) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit contenir au moins une lettre majuscule');
    }
  
  
    return validationResult;
  }