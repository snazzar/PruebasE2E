Feature: Edit Post
 
  @user1 @web
  Scenario: As a first user I say hi to a second user
    # Given    
    Given I log in as administrator
    And I click on element having css selector "a[href="#/posts/"]"
    And I click on element having css selector "a[href="#/editor/post/"]"
    And I enter "Test Post Kraken" into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter "Hello World" into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "div.gh-publishmenu"
    And I click on element having css selector "button.gh-publishmenu-button"
    And I click on element having css selector "header a[href^="#/posts/"]"

    # When
    When I click on element having css selector "div.gh-contentfilter-type"
    And I click on element having css selector "ul > li[data-option-index="2"]"
    And I click on element containing "Test Post Kraken"
    And I clear input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I enter "Test Post Kraken (Updated)" into input field having css selector "div.gh-koenig-editor-pane > textarea"
    And I clear input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I enter "Hello World (Updated)" into input field having css selector "div.gh-koenig-editor-pane div[contenteditable=true]"
    And I click on element having css selector "div.gh-publishmenu"
    And I click on element having css selector "button.gh-publishmenu-button"
    And I click on element having css selector "header a[href^="#/posts/"]"

    # Then
    Then I should see text "Test Post Kraken (Updated)"
    