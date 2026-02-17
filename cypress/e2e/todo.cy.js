/// <referance types="cypress" />
import TodoApi from '../api/todoApi';
import UserApi from '../api/userApi';
import TodoPage from '../pages/TodoPage';

describe("todo test cases", () => {

    let token;
    beforeEach(() => {
        UserApi.register().then(response => {
            token = response.body.access_token

        })

    })

    it("Should be able to add a todo", () => {

        new TodoPage()
            .load()
            .clickOnAddButton()
            .addNewTodo("Learn Cypress")
            .firstItemShouldHaveText("Learn Cypress");
    })

    it("Should be able to mark a todo as completed", () => {

        TodoApi.addTodo(token);

        new TodoPage()
            .load()
            .markFirstTodoAsCompeleted()
            .firstItemShouldHaveBacgroundColor('rgb(33, 76, 97)');

    });
})
