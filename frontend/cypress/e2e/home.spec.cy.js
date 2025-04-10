describe('Home Page', () => {
  it('should load and display the welcome message', () => {
    cy.visit('/');
    cy.contains('Welcome to the Book Store!'); 
  });
});
