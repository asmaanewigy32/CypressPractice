import TodoPage from "./TodoPage";

class NewtodoPage{

    get newTodoElement(){
        return cy.get('[data-testid="new-todo"]');
    }

    get submitNewButton(){
        return cy.get('[data-testid="submit-newTask"]');
    }

    load()
    {
        cy.visit("/todo/new");
        return this;
    }

    addNewTodo(item){
        this.newTodoElement.type(item);
        this.submitNewButton.click();
        return new TodoPage();
    }

}
export default NewtodoPage;