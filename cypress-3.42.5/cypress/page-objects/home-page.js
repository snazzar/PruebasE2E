/// <reference types="Cypress" />

export class HomePage {
    navigate() {
        cy.visit('');
    }

    getArticleByTitle(postTitle) {
        return this.getElementByTitle(postTitle).closest('article');
    }

    getElementByTitle(postTitle) {
        return cy.get('article').contains(postTitle);
    }
}