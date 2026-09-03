Feature: Session management

  @session
  Scenario: Session persists on page refresh after a successful login
    Given a login page
    When you login as a "validUser1" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully
    When you refresh the page
    Then you should remain logged in

  @session
  Scenario: User remains logged out after logout and page refresh
    Given a login page
    When you login as a "validUser1" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully
    When you click on the 'Logout' button
    Then you should be logged out successfully
    When you refresh the page
    Then you should remain logged out
