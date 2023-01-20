describe('Home page', () => {
  it('should post form successfully', () => {
    cy.visit('/');
    cy.contains('Share your feedback with us!');
    // assert validations
    cy.contains('button', 'Post').click();
    cy.contains('Please enter your name');
    cy.contains('Please enter a valid email address');
    cy.contains('Please select some stars');
    cy.contains('Please enter your comment');

    // fill the form
    cy.contains('div', 'Name').find('input').first().type('Automated user');
    cy.contains('div', 'Email').find('input').first().type('automated_user@email.com');
    cy.contains('div', 'Your comment')
      .find('textarea')
      .first()
      .type('This is an automated comment.');
    cy.get('[aria-label="Give 5 stars"]').click();

    // submit the form
    cy.contains('button', 'Post').click();

    // expect redirection to comments page and display of new data
    // timeout is longer here; server works slow at local machine
    cy.url({ timeout: 15000 }).should('include', '/comments');
    cy.contains('Automated user (automated_user@email.com)');
    cy.contains('This is an automated comment.');
  });
});

export {};
