/// <reference types="Cypress" />

import { LoginPage } from "../page-objects/login-page";
import { ScreenshotProvider } from "../support/common";

describe('Login', () => {
    it('Should redirect to admin site when user provides valid credentials', () => {
        let screenshotProvider = new ScreenshotProvider('1');
        let loginPage = new LoginPage();
        loginPage.navigate();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.setUsername('ghost-author@example.com');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.setPassword('Pruebas10automatizadas');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.login();
        screenshotProvider.screenshot();

        cy.location('hash').should('eq', '#/site');
        cy.wait(1000);
        screenshotProvider.screenshot();
    });

    it('Should show an error message when user provides no credentials', () => {
        let screenshotProvider = new ScreenshotProvider('2');
        let loginPage = new LoginPage();
        loginPage.navigate();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.login();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.getLoginButton().should('include.text', 'Retry');
        loginPage.getUsernameInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
        loginPage.getPasswordInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
        loginPage.getMainElement().should('include.text', 'Please fill out the form to sign in');
        cy.location('hash').should('eq', '#/signin');
    });

    it('Should show an error message when user provides an email of a non existing user', () => {
        let screenshotProvider = new ScreenshotProvider('3');
        let loginPage = new LoginPage();
        loginPage.navigate();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.setUsername('testuser@mockgmail.com');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.setPassword('12345');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.login();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.getLoginButton().should('include.text', 'Retry');
        loginPage.getMainElement().should('include.text', 'There is no user with that email address');
        // loginPage.getMainElement().should('include.text', 'Access denied');
        cy.location('hash').should('eq', '#/signin');
    });

    it('Should show an error message when user provides valid email and invalid password', () => {
        let screenshotProvider = new ScreenshotProvider('4');
        let loginPage = new LoginPage();
        loginPage.navigate();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.setUsername('ghost-author@example.com');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.setPassword('12345');
        cy.wait(1000);
        screenshotProvider.screenshot();
        loginPage.login();
        cy.wait(1000);
        screenshotProvider.screenshot();

        loginPage.getLoginButton().should('include.text', 'Retry');
        loginPage.getPasswordInput().should('have.css', 'border-color', 'rgb(240, 82, 48)');
        loginPage.getMainElement().should('include.text', 'Your password is incorrect');
        cy.location('hash').should('eq', '#/signin');
    });
});