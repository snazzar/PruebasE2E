/// <reference types="Cypress" />

import { PostsPage } from "./posts-page"

export class NewPostPage {
    setPostTitle(postTitle) {
        this.getPostTitleInput().type(postTitle);
    }

    getPostTitleInput() {
        return cy.get('div.gh-koenig-editor-pane > textarea');
    }

    setPostContent(postContent) {
        this.getPostContentInput().type(postContent);
    }
    
    getPostContentInput() {
        return cy.get('div.gh-koenig-editor-pane div[contenteditable=true]');
    }

    openPublishMenu() {
        cy.get('div.gh-publishmenu').click();
    }

    publish() {
        cy.get('button.gh-publishmenu-button').click();
    }

    navigateToPosts() {
        // cy.get('a.gh-editor-back-button').click();
        cy.get('header a[href^="#/posts/"]').click();        
        return new PostsPage();
    }
}