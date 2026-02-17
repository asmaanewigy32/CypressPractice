/// <referance types= "cypress" />
import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";

it("Should be able to login using valid mail and password", () => {

  new LoginPage()
    .load()
    .login("test23@example.com", "test-12345")
    .welcomeMassageShouldBeVisible();
});
