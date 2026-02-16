/// <referance types="cypress" />
import { faker } from '@faker-js/faker';

describe("todo test cases", () => {

    let token;
    beforeEach(() => {
        cy.request({
            url: "/api/v1/users/register",
            method: "POST",
            body: {
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                email: faker.internet.email(),
                password: "Test-12345",
            },
        }).then(response => {
            token = response.body.access_token

        })

    })

    it("Should be able to add a todo", () => {

        cy.visit("/");
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type("Learn Cypress");
        cy.get('[data-testid="submit-newTask"]').click();
        cy.get('[data-testid="todo-item"]').eq(0).should('have.text', "Learn Cypress");

    });

    it("Should be able to mark a todo as completed", () => {

        cy.request({
            url: "/api/v1/tasks",
            method: "POST",
            auth: {
                bearer: token,
            },
            body: {
                "item": "learn Cypress",
                "isCompleted": false
            },

        });

        cy.visit("/");
        cy.get('[data-testid="complete-task"]').eq(0).click();
        cy.get('[data-testid="todo-item"]')
            .eq(0)
            .should('have.css', 'background-color', 'rgb(33, 76, 97)');

    });
})



