  /// <referance types= "cypress" />

  it("Should be able to add a todo",() => {

    cy.request({
        url : "/api/v1/users/login",
        method: "POST",
        body:{
            "email":"test23@example.com",
            "password":"test-12345",
        },
    });

    cy.visit("/");
    cy.get('[data-testid="welcome"]').should("be.visible");
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type("Learn Cypress");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').eq(0).should('have.text',"Learn Cypress");

  });

  it("Should be able to mark a todo as completed",() => {

     cy.request({
        url : "/api/v1/users/login",
        method: "POST",
        body:{
            "email":"test23@example.com",
            "password":"test-12345",
        },
    });

    cy.visit("/");
    cy.get('[data-testid="welcome"]').should("be.visible");
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type("Learn Cypress");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').eq(0).should('have.text',"Learn Cypress");
    cy.get('[data-testid="complete-task"]').eq(0).click();
    cy.get('[data-testid="todo-item"]').should('have.css','background-color','rgb(33, 76, 97)');

  });
