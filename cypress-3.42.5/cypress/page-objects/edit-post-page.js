/// <reference types="Cypress" />

import { PostsPage } from "./posts-page"

export class EditPostPage {
    setPostTitle(postTitle) {
        this.getPostTitleInput().type(postTitle);
    }

    clearPostTitle() {
        this.getPostTitleInput().clear();
    }

    getPostTitleInput() {
        return cy.get('div.gh-koenig-editor-pane > textarea');
    }

    setPostContent(postContent) {
        this.getPostContentInput().type(postContent);
    }

    clearPostContent() {
        this.getPostContentInput().clear();
    }
    
    getPostContentInput() {
        return cy.get('div.gh-koenig-editor-pane div[contenteditable=true]');
    }

    openUpdateMenu() {
        cy.get('div.gh-publishmenu').click();
    }

    update() {
        cy.get('button.gh-publishmenu-button').click();
    }

    navigateToPosts() {
        // cy.get('a.gh-editor-back-button').click();
        cy.get('header a[href^="#/posts/"]').click();
        return new PostsPage();
    }
}