/// <reference types="cypress" />

describe("Manager page", () => {
  beforeEach(() => {
    cy.visit("/manager");
  });

  it("Interacao na tela", () => {
    cy.get("[data-test=fullName]").type("Henrique Weiand");
    cy.get("[data-test=document]").type("88888888888");

    cy.get("[data-test=pages-manager] button").click();
  });

  it("Preenche apenas um campo e recebe erro", () => {
    cy.get("[data-test=fullName]").type("Henrique Weiand");

    cy.get("[data-test=pages-manager] button").click();
    cy.get("[data-test=document]").next("div").contains("Deve ser preenchido");
  });

  it("Deve conseguir trocar para tela de admin", () => {
    cy.get("[data-test=pages-manager] a").click();
    cy.get("[data-test=pages-admin] h3").contains("Admin");
    cy.url().should("include", "/");
  });
});
