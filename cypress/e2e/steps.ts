import {
  Given,
  When,
  When as And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../support/pages/login.page.js";

Given("a login page", () => {
  loginPage.visit();
});

When("you login as a {string} with valid credentials", (userKey: string) => {
  cy.fixture("validUsers").then((users) => {
    const { email, password } = users[userKey];
    loginPage.enterCredentials(email, password);
  });
});

And("you click on the 'Login' button", () => {
  loginPage.clickLoginButton();
});

Then("you should be logged in successfully", () => {
  loginPage.assertLoggedIn();
});

When("you login as a {string} with invalid credentials", (userKey: string) => {
  cy.fixture("invalidUsers").then((users) => {
    const { email, password } = users[userKey];
    loginPage.enterCredentials(email, password);
  });
});

Then(
  "an error message {string} should be displayed",
  (errorMessage: string) => {
    loginPage.assertErrorMessageDisplayed(errorMessage);
  },
);

And("you stay on the login page", () => {
  loginPage.assertLoginPageVisible();
});

When("you click on the 'email' field", () => {
  loginPage.clickEmailField();
});

When("you append {string} to the email", (fix: string) => {
  loginPage.appendToEmail(fix);
});

Then("no error message should be displayed", () => {
  loginPage.assertErrorMessageNotDisplayed();
});
