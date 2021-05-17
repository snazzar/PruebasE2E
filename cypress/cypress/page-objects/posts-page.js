/// <reference types="Cypress" />

import { NewPostPage } from "./new-post-page";
import { EditPostPage } from "./edit-post-page";

export class PostsPage {
    clickFilterByType() {
        cy.get('div.gh-contentfilter-type').click();
    }

    filterByPublishedPosts() {
        // cy.get('div.gh-contentfilter-type').click();
        // cy.wait(1000);
        cy.get('ul > li').contains('Published posts').click();
    }

    filterByDraftPosts() {
        cy.get('ul > li').contains('Draft posts').click();
    }

    getPostListItemByTitle(postTitle) {
        return cy.get('ol.posts-list a').contains(postTitle).closest('li');
    }

    navigateToNewPost() {
        cy.get('a[href="#/editor/post/"]').first().click({ force: true });
        return new NewPostPage();
    }

    navigateToEditPost(postTitle) {
        cy.get('ol.posts-list a').contains(postTitle).closest('a').click({ force: true });
        return new EditPostPage();
    }
}