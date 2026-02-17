import NewtodoPage from "./NewtodoPage";

class TodoPage{

    get welcomeMassage(){
        return cy.get('[data-testid="welcome"]');
    }

    get addButton()
    {
       return cy.get('[data-testid="add"]');
    }

    get firstTodoElement()
    {
        return cy.get('[data-testid="todo-item"]').eq(0);
    }

    get firstTodoCheckBox()
    {
        return cy.get('[data-testid="complete-task"]').eq(0);
    }

    load()
    {
        cy.visit("/todo");
        return this;
    }
    
    welcomeMassageShouldBeVisible()
    {
        this.welcomeMassage.should("be.visible");
        return this;
    } 

    clickOnAddButton()
    {
        this.addButton.click();
        return new NewtodoPage();
    }

    firstItemShouldHaveText(text){
        this.firstTodoElement.should('have.text', text);
        return this;
    }

    markFirstTodoAsCompeleted()
    {
        this.firstTodoCheckBox.click();
        return this ;
    }

    firstItemShouldHaveBacgroundColor(color){
        this.firstTodoElement.should('have.css', 'background-color', 'rgb(33, 76, 97)');
        return this;
    }




}
export default TodoPage;