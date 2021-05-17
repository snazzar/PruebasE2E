Feature: Create Post
 
  @user1 @web
  Scenario: As a first user I say hi to a second user
    # Given
    Given I log in as administrator
    
    # When
    When I click on element having css selector "a[href="#/posts/"]"
    And I click on element having css selector "a[href="#/editor/post/"]"
    And I enter "Test Post Kraken Draft" into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter "Hello World Kraken Draft" into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "header a[href^="#/posts/"]"
    And I click on element having css selector "div.gh-contentfilter-type"
    And I click on element having css selector "ul > li[data-option-index="1"]"
    
    # Then
    Then I should see text "Test Post Kraken Draft"
    