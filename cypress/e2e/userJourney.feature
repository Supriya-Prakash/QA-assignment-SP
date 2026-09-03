Feature: User journey

  Scenario: User can successfully login, access the home page and logout
    Given a login page
    When you login as a "validUser1" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully
    And the menu items should be visible
    When you click on the 'Logout' button
    Then you should be logged out successfully
