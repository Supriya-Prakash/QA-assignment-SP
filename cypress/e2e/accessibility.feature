Feature: Accessibility

@accessibility
Scenario: Login page should have no detectable accessibility violations
    Given a login page
    Then the login page should have no accessibility violations

@accessibility
Scenario: Home page should have no detectable accessibility violations
    Given a login page
    When you login as a "validUser1" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully
    And the home page should have no accessibility violations