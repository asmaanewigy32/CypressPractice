import { faker } from '@faker-js/faker';
/// <referance types= "cypress" />

it("Should be able to add a todo", () => {

    cy.request({
        url: "/api/v1/users/register",
        method: "POST",
        body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: "Test-12345",
        },
    });

    cy.visit("/");
    cy.get('[data-testid="add"]').click();
    cy.get('[data-testid="new-todo"]').type("Learn Cypress");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]').eq(0).should('have.text', "Learn Cypress");

});

it("Should be able to mark a todo as completed", () => {

    cy.request({
        url: "/api/v1/users/register",
        method: "POST",
       body: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: "Test-12345",
        },
    }).then((response) => {
        cy.request({
            url: "/api/v1/tasks",
            method: "POST",
            auth: {
                bearer: response.body.access_token
            },
            body: {
                "item": "learn Cypress",
                "isCompleted": false
            },
        })
    });

    cy.visit("/");
    cy.get('[data-testid="complete-task"]').eq(0).click();
    cy.get('[data-testid="todo-item"]')
        .eq(0)
        .should('have.css', 'background-color', 'rgb(33, 76, 97)');

});
