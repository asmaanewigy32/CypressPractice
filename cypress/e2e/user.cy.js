  /// <referance types= "cypress" />
import LoginPage from "../pages/LoginPage";

  it("Should be able to login using valid mail and password",() => {
    
    const loginPage = new LoginPage();
    loginPage.load();
    loginPage.login("test23@example.com","test-12345");
    cy.get('[data-testid="welcome"]').should("be.visible");

  });
