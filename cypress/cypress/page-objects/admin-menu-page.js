/// <reference types="Cypress" />

import { PostsPage } from "./posts-page"

export class AdminMenuPage {
    navigateToPosts() {
        cy.get('a').contains('Posts').click({ force: true });
        return new PostsPage();
    }
}