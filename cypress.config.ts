import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import mochawesome from "cypress-mochawesome-reporter/plugin";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
) {
  await addCucumberPreprocessorPlugin(on, config);

  //Register Mochawesome with Cypress for tests results to be collected.
  mochawesome(on);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  return config;
}

//Mochawesome generates an HTML report after the test run.
export default defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshot: true,
    inlineAssets: true,
  },

  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents,
  },
});
