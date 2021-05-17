Feature: Login
 
  @user1 @web
  Scenario: As a first user I say hi to a second user
    # Given
    Given I navigate to login page

    # When
    When I enter "ghost-author@example.com" into input field having css selector "input[name=identification]"
    And I enter "Pruebas10automatizadas" into input field having css selector "input[name=password]"
    And I click on element having css selector "button.login"
    
    # Then
    Then I should see text "The Daily"
    And I should see text "View site"