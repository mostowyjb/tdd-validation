describe('Password Validation', () => {
    it('should validate password length', () => {
      cy.visit('/');
      cy.get('input').type('abc123$');
      cy.get('button').click();
      cy.contains('Le mot de passe doit comporter au moins 8 caractères');
    });
  
    // Ajoutez les autres tests pour les conditions restantes
  });