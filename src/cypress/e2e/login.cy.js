import { mount } from "cypress/react18";
import LoginForm from "../../components/LoginForm";

describe("Login Form", () => {
  it("should display login form", () => {
    cy.visit("http://localhost:5173/");
    cy.get("form").should("exist");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });
});
