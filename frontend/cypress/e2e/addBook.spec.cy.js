describe('Página AddBook', () => {
    beforeEach(() => {
      cy.visit('/add-book');
    });
  
    it('deve exibir o formulário de adicionar livro', () => {
      cy.get('form').should('be.visible');
    });
  
    it('deve permitir adicionar um livro', () => {
      cy.get('input[name="title"]').type('O feminismo é para todo mundo: Políticas arrebatadoras');
      cy.get('input[name="author"]').type('bell hooks');
      cy.get('input[name="genre"]').type('sociologia');
      cy.get('input[name="year"]').type('2018');
      cy.get('input[name="readAt"]').type('2023-04-22');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Dom Casmurro').should('be.visible');
    });
  });
  