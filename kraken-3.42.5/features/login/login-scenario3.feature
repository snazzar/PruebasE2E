Feature: Login
  
  @user1 @web
  Scenario: As a first user I say hi to a second user
    # Given
    Given I navigate to login page

    # When
    When I enter "testuser@mockgmail.com" into input field having css selector "input[name=identification]"
    And I enter "12345" into input field having css selector "input[name=password]"
    And I click on element having css selector "button.login"

    # Then
    Then I should see text "Retry"
    And I should see text "There is no user with that email address"