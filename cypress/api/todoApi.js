class TodoApi{

    static addTodo(token){
        return  cy.request({
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
    }

}
export default TodoApi;