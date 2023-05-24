describe('Password Validation', () => {
    it('should validate password length', () => {
      cy.visit('/');
      cy.get('input').type('abc123$');
      cy.get('button').click();
      cy.get('#result-container').should('contain', 'Le mot de passe doit comporter au moins 8 caractères');
    });

    it('Vérifie que le mot de passe doit contenir au moins 2 chiffres', () => {
      cy.visit('/');
      cy.get('input').type('password');
      cy.get('button').click();
      cy.get('#result-container').should('contain', 'Le mot de passe doit contenir au moins 2 chiffres');
    });

    it('Vérifie que le mot de passe doit contenir au moins une lettre majuscule', () => {
      cy.visit('/');
      cy.get('input').type('password123');
      cy.get('button').click();
      cy.get('#result-container').should('contain', 'Le mot de passe doit contenir au moins une lettre majuscule');
    });
  
    // Ajoutez les autres tests pour les conditions restantes
  });