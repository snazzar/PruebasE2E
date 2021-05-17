/// <reference types="Cypress" />

import { logInAsAdmin, createPostAndPublish, createDraftPost, ScreenshotProvider } from "../support/common";
import { HomePage } from "../page-objects/home-page";
import { PostsPage } from "../page-objects/posts-page";

describe('Create Post', () => {
    it('Should be visible as published from post list when user creates and publish new post', () => {
        let screenshotProvider = new ScreenshotProvider('1');
        let postsPage = new PostsPage();
        let postTitle = 'Test Post' + Date.now().toString();
        let postContent = 'Hello World';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();
        
        createPostAndPublish(postTitle, postContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();

        postsPage.clickFilterByType();
        cy.wait(1000);
        screenshotProvider.screenshot();
        postsPage.filterByPublishedPosts();
        cy.wait(1000);
        screenshotProvider.screenshot();

        postsPage.getPostListItemByTitle(postTitle).should('include.text', 'Published');
    });

    it('Should be visible from live site when user creates and publish new post', () => {
        let screenshotProvider = new ScreenshotProvider('2');
        let homePage = new HomePage();     
        let postTitle = 'Test Post' + Date.now().toString();
        let postContent = 'Hello World';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();

        createPostAndPublish(postTitle, postContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();
        homePage.navigate();        

        homePage.getArticleByTitle(postTitle).should('include.text', postContent.substr(0, 25));
        screenshotProvider.screenshot();
    });

    it('Should be visible as draft from post list when user creates a new post', () => {
        let screenshotProvider = new ScreenshotProvider('3');
        let postsPage = new PostsPage();
        let postTitle = 'Test Post ' + Date.now().toString();
        let postContent = 'Hello World';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();

        createDraftPost(postTitle, postContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();

        postsPage.clickFilterByType();
        cy.wait(1000);
        screenshotProvider.screenshot();
        postsPage.filterByDraftPosts();
        cy.wait(1000);
        screenshotProvider.screenshot();

        postsPage.getPostListItemByTitle(postTitle).should('include.text', 'Draft');
    });

    it('Should not be visible from live site when user creates a draft post', () => {
        let screenshotProvider = new ScreenshotProvider('4');
        let homePage = new HomePage();
        let postTitle = 'Test Post ' + Date.now().toString();
        let postContent = 'Hello World';
		logInAsAdmin();
        cy.wait(2000);
        screenshotProvider.screenshot();

        createDraftPost(postTitle, postContent, screenshotProvider);
        cy.wait(1000);
        screenshotProvider.screenshot();      
        homePage.navigate();        

        homePage.getElementByTitle(postTitle).should('not.exist');
        screenshotProvider.screenshot();
    });
});

