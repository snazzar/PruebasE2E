/// <reference types="Cypress" />

import { logInAsAdmin, createPostAndPublish, ScreenshotProvider } from "../support/common";
import { HomePage } from "../page-objects/home-page";
import { PostsPage } from "../page-objects/posts-page";

describe('Edit Post', () => {
    it('Should be visible as published from post list when user creates and publish new post', () => {
        let screenshotProvider = new ScreenshotProvider('1');
        let postsPage = new PostsPage();
        let postOriginalTitle = 'Test Post' + Date.now().toString();
        let postOriginalContent = 'Hello World';
        let postUpdatedTitle = postOriginalTitle + ' (Updated)';
        let postUpdatedContent = postOriginalContent + ' (Updated)';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();
        createPostAndPublish(postOriginalTitle, postOriginalContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();

        updatePost(postOriginalTitle, postUpdatedTitle, postUpdatedContent, screenshotProvider);

        postsPage.getPostListItemByTitle(postUpdatedTitle).should('include.text', 'Published');
        screenshotProvider.screenshot();
    });

    it('Should be visible from live site when user creates and publish new post', () => {
        let screenshotProvider = new ScreenshotProvider('2');
        let homePage = new HomePage();
        let postOriginalTitle = 'Test Post' + Date.now().toString();
        let postOriginalContent = 'Hello World';
        let postUpdatedTitle = postOriginalTitle + ' (Updated)';
        let postUpdatedContent = postOriginalContent + ' (Updated)';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();
        createPostAndPublish(postOriginalTitle, postOriginalContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();

        updatePost(postOriginalTitle, postUpdatedTitle, postUpdatedContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();
        homePage.navigate();

        homePage.getArticleByTitle(postUpdatedTitle).should('include.text', postUpdatedContent.substr(0, 25));
        screenshotProvider.screenshot();
    });
});

function updatePost(postOriginalTitle, postNewTitle, postNewContent, screenshotProvider) {
    let postsPage = new PostsPage();
    let editPostPage;

    postsPage.clickFilterByType();
    cy.wait(1000);
    screenshotProvider.screenshot();
    postsPage.filterByPublishedPosts();
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage = postsPage.navigateToEditPost(postOriginalTitle);
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.clearPostTitle();
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.setPostTitle(postNewTitle);
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.clearPostContent();
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.setPostContent(postNewContent);
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.openUpdateMenu();
    cy.wait(1000);
    screenshotProvider.screenshot();
    editPostPage.update();
    cy.wait(1500);
    screenshotProvider.screenshot();
    editPostPage.navigateToPosts();
}