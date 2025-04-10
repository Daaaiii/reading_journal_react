describe('Página About', () => {
    beforeEach(() => {
      cy.visit('/about');
    });
  
    it('deve exibir o título "About Us"', () => {
      cy.contains('About Us').should('be.visible');
    });
  
    it('deve exibir o texto sobre o desenvolvimento da aplicação', () => {
      cy.contains(
        'This app was developed as part of the Frontend Development course at PUCRS using React and Vite.'
      ).should('be.visible');
    });
  });
  