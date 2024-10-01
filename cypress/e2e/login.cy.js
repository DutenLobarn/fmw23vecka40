// import { mount } from "cypress/react18";
// import LoginForm from "../../src/components/LoginForm";

describe("Login Form", () => {
  it("should display login form", () => {
    cy.visit("http://localhost:5173/");
    cy.get("form").should("exist");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should not display error message initially", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Please enter username and password").should("not.exist"); // Check that error is not visible initially
  });

  it("should display error message when fields are empty", () => {
    cy.visit("http://localhost:5173/");
    cy.get('button[type="submit"]').click();
    cy.contains("Please enter username and password").should("be.visible"); // Check that error becomes visible after submission
  });
});
