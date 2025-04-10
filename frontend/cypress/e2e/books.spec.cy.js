describe('Books Page - E2E Test', () => {
  beforeEach(() => {
  
    cy.visit('/books'); 
  });

  it('should load the Books page and display books', () => {
    
    cy.contains('Books List').should('be.visible');
    
    
    cy.get('.card').should('have.length.greaterThan', 0); 
  });

  it('should display book details correctly', () => {
    
    cy.get('.card').last().within(() => {
      cy.get('.card-title').should('have.text', 'O feminismo é para todo mundo: Políticas arrebatadoras'); 
      cy.get('.card-subtitle').should('have.text', 'bell hooks'); 
      cy.get('.card-text').should('include.text', 'Published at: 2018'); 
    });
  });

  it('should display edit and delete buttons with icons', () => {
    
    cy.get('.card').last().within(() => {      
      cy.get('a').find('svg').should('have.length', 1); // 
      cy.get('button').find('svg').should('have.length', 1); 
    });
  });

  it('should delete a book when the delete button is clicked', () => {
   
    const deleteMock = cy.stub().as('deleteBook');
    cy.get('.card').last().within(() => {
      cy.get('button').click();
    });
    cy.on('window:confirm', () => {
      deleteMock();
      return true; 
    });

    cy.get('.card').first().should('not.contain', 'O feminismo é para todo mundo: Políticas arrebatadoras'); 
  });
});
