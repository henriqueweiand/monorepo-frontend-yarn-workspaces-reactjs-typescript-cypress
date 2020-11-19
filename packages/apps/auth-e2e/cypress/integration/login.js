/// <reference types="cypress" />

describe('Login', () => {
	const email = Cypress.env('email')
	const password = Cypress.env('password')

	beforeEach(() => {
		cy.visit('/')
	})

	it('Preenchimento dos campos de login', () => {
		cy.get('[data-test=email]').type(email)
		cy.get('[data-test=password]').type(password)
	})

	it('Preenchimento dos campos de login e submit', () => {
		cy.get('[data-test=email]').type(email)
		cy.get('[data-test=password]').type(password)

		cy.get('[data-test=login-form] [data-test=submit]').click()
	})
})
