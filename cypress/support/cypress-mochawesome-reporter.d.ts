// The reporter plugin does not expose TypeScript declarations for this module.
// Use `any` here to avoid duplicating Cypress internal plugin types in our code.
declare module "cypress-mochawesome-reporter/plugin" {
  const mochawesome: (on: any) => void;
  export default mochawesome;
}

declare module "cypress-mochawesome-reporter/register";
