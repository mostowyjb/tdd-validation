export function validatePassword(password) {
    const validationResult = {
      valid: true,
      errors: [],
    };
  
    if (password.length < 8) {
      validationResult.valid = false;
      validationResult.errors.push('Le mot de passe doit comporter au moins 8 caractères');
    }
    
    // Vérification du nombre de chiffres
    const digitCount = password.match(/[0-9]/g)?.length || 0;
    if (digitCount < 2) {
      validationResult.valid = false;
      validationResult.errors.push("Le mot de passe doit contenir au moins 2 chiffres");
    } 
    // Ajoutez les autres conditions de validation et les messages d'erreur correspondants
  
    return validationResult;
  }