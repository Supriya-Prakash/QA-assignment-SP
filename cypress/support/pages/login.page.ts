import { SELECTORS } from "../../e2e/const.ts";

class LoginPage {
  // Navigate to the login page and clear any persisted browser state.
  visit() {
    cy.clearAllLocalStorage();
    cy.visit("/");
  }

  // Clears email field and enters supplied email address. If an empty email is provided, the field remains empty.
  enterEmail(email: string) {
    const emailInput = cy.get(SELECTORS.EMAIL_INPUT);
    emailInput.clear();

    if (email) {
      emailInput.type(email);
    }
  }

  // Clears password field and enters supplied password. If an empty password is provided, the field remains empty.
  enterPassword(password: string) {
    const passwordInput = cy.get(SELECTORS.PASSWORD_INPUT);
    passwordInput.clear();

    if (password) {
      passwordInput.type(password);
    }
  }

  enterCredentials(email: string, password: string) {
    this.enterEmail(email);
    this.enterPassword(password);
  }

  clickLoginButton() {
    cy.get(SELECTORS.LOGIN_BUTTON).should("be.visible").click();
  }

  login(email: string, password: string) {
    this.enterCredentials(email, password);
    this.clickLoginButton();
  }

  clickEmailField() {
    cy.get(SELECTORS.EMAIL_INPUT).click();
  }

  // Appends text to existing email input.
  appendToEmail(text: string) {
    cy.get(SELECTORS.EMAIL_INPUT).type(text);
  }

  // Assertions
  assertLoginPageVisible() {
    cy.get(SELECTORS.HEADER_MESSAGE).should(
      "contain.text",
      "Automation doesn't stop at testing, it's just a beginning!",
    );
    cy.get(SELECTORS.LOGIN_BUTTON).should("be.visible");
  }

  assertErrorMessageDisplayed(message: string) {
    cy.get(SELECTORS.ERROR_MESSAGE).should("contain.text", message);
  }

  assertErrorMessageNotDisplayed() {
    cy.get(SELECTORS.ERROR_MESSAGE).should("not.exist");
  }
}

export const loginPage = new LoginPage();
