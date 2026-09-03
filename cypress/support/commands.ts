//Add reusable Cypress commands here as the test suite grows.

//Runs Axe against WCAG 2.0 and 2.1 level A and AA.
//Best practice rules have been excluded from the check.
export function checkWcagA11y() {
  cy.injectAxe();

  cy.checkA11y(undefined, {
    runOnly: {
      type: "tag",
      values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
    },
  });
}
