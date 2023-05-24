export function validatePassword(password) {
    const validationResult = {
      valid: true,
      errors: [],
    };
  
    if (password.length < 8) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit comporter au moins 8 caractères');
    }
  
    // Ajoutez les autres conditions de validation et les messages d'erreur correspondants
  
    return validationResult;
  }