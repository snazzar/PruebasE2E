Feature: Login
  
  @user1 @web
  Scenario: As a first user I say hi to a second user
    # Given
    Given I navigate to login page

    # When
    When I click on element having css selector "button.login"

    # Then
    Then I should see text "Retry"
    And I should see text "Please fill out the form to sign in"