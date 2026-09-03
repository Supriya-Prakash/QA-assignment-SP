Feature: User login

  @smoke
  Scenario Outline: Successful user login with valid credentials
    Given a login page
    When you login as a "<validUser>" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully

    Examples:
      | validUser  |
      | validUser1 |
      | validUser2 |
      | validUser3 |

  @negative
  @credentials
  Scenario Outline: Login failure for user with incorrect credentials
    Given a login page
    When you login as a "<invalidUser>" with invalid credentials
    And you click on the 'Login' button
    Then an error message "Invalid email or password. Please try again." should be displayed
    And you stay on the login page

    Examples:
      | invalidUser             |
      | invalidEmail            |
      | invalidPassword         |
      | invalidEmailAndPassword |

  @negative
  @boundary
  Scenario Outline: Login fails with empty or case-sensitive credentials
    Given a login page
    When you login as a "<invalidUser>" with invalid credentials
    And you click on the 'Login' button
    Then an error message "Invalid email or password. Please try again." should be displayed
    And you stay on the login page

    Examples:
      | invalidUser           |
      | emptyEmail            |
      | emptyPassword         |
      | emptyEmailAndPassword |
      | upperCaseEmail        |
      | upperCasePassword     |

  @negative
  @format
  Scenario Outline: Login fails with invalid email format
    Given a login page
    When you login as a "<invalidUser>" with invalid credentials
    And you click on the 'Login' button
    Then an error message "Invalid email or password. Please try again." should be displayed
    And you stay on the login page

    Examples:
      | invalidUser          |
      | emailWithoutAtSymbol |
      | missingDotInDomain   |

  @negative
  @recovery
  Scenario Outline: Retry user login with correct credentials is successful after a failed attempt
    Given a login page
    When you login as a "<invalidUser>" with invalid credentials
    And you click on the 'Login' button
    Then an error message "Invalid email or password. Please try again." should be displayed
    When you login as a "<validUser>" with valid credentials
    And you click on the 'Login' button
    Then you should be logged in successfully

    Examples:
      | invalidUser          | validUser  |
      | invalidPassword      | validUser1 |
      | emptyEmail           | validUser1 |
      | emailWithoutAtSymbol | validUser1 |

  @recovery
  Scenario Outline: User can recover from an incorrect email and login successfully
    Given a login page
    When you login as a "<invalidUser>" with invalid credentials
    And you click on the 'Login' button
    Then an error message "Invalid email or password. Please try again." should be displayed
    When you click on the 'email' field
    When you append "<fix>" to the email
    Then no error message should be displayed
    And you click on the 'Login' button
    Then you should be logged in successfully

    Examples:
      | invalidUser         | fix |
      | typeMistakeInDomain | m   |
