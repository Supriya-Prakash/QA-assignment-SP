import { SELECTORS } from "../../e2e/const.ts";

class HomePage {
  assertHomePageVisible() {
    cy.get(SELECTORS.HOME_MENU).should("be.visible");
    cy.get(SELECTORS.LOGOUT_BUTTON).should("be.visible");
  }

  assertMenuItemsVisible() {
    cy.get(SELECTORS.HOME_MENU).should("be.visible");
    cy.get(SELECTORS.PRODUCTS_MENU).should("be.visible");
    cy.get(SELECTORS.CONTACT_MENU).should("be.visible");
    cy.get(SELECTORS.USER_PROFILE).should("be.visible");
  }

  clickLogout() {
    cy.get(SELECTORS.LOGOUT_BUTTON).should("be.visible").click();
  }
}

export const homePage = new HomePage();
