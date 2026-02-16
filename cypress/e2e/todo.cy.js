/// <referance types="cypress" />
import TodoApi from '../api/todoApi';
import UserApi from '../api/userApi';

describe("todo test cases", () => {

    let token;
    beforeEach(() => {
        UserApi.register().then(response => {
            token = response.body.access_token

        })

    })

    it("Should be able to add a todo", () => {

        cy.visit("/");
        cy.get('[data-testid="add"]').click();
        cy.get('[data-testid="new-todo"]').type("Learn Cypress");
        cy.get('[data-testid="submit-newTask"]').click();
        cy.get('[data-testid="todo-item"]').eq(0).should('have.text', "Learn Cypress");

    })

    it("Should be able to mark a todo as completed", () => {

        TodoApi.addTodo(token);

        cy.visit("/");
        cy.get('[data-testid="complete-task"]').eq(0).click();
        cy.get('[data-testid="todo-item"]')
            .eq(0)
            .should('have.css', 'background-color', 'rgb(33, 76, 97)');

    });
})
