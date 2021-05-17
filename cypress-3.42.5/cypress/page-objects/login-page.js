/// <reference types="Cypress" />

export class LoginPage {
    navigate() {
        cy.visit('/ghost/#/signin');
    }

    setUsername(username) {
        this.getUsernameInput().type(username);
    }

    getUsernameInput() {
        return cy.get('input[name=identification]');
    }

    setPassword(password) {
        this.getPasswordInput().type(password);
    }

    getPasswordInput() {
        return cy.get('input[name=password]');
    }    

    getLoginButton() {
        return cy.get('button.login');
    }

    getMainElement() {
        return cy.get('main');
    }

    login() {
        this.getLoginButton().click();
    }
}