/// <reference types="cypress" />

describe("Admin page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Interacao na tela", () => {
    cy.get("[data-test=fullName]").type("Henrique Weiand");
    cy.get("[data-test=document]").type("99999999999");

    cy.get("[data-test=pages-admin] button").click();
  });

  it("Preenche apenas um campo e recebe erro", () => {
    cy.get("[data-test=fullName]").type("Henrique Weiand");

    cy.get("[data-test=pages-admin] button").click();
    cy.get("[data-test=document]").next("div").contains("Deve ser preenchido");
  });

  it("Deve conseguir trocar para tela de manager", () => {
    cy.get("[data-test=pages-admin] a").click();
    cy.get("[data-test=pages-manager] h3").contains("Manager");
    cy.url().should("include", "/manager");
  });
});
