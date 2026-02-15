  /// <referance types= "cypress" />

  it("Should be able to login using valid mail and password",() => {
    cy.visit("https://qacart-todo.herokuapp.com");
    cy.get('[data-testid="email"]').type("test23@example.com");
    cy.get('[data-testid="password"]').type("test-12345");
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="welcome"]').should("be.visible");


  });
