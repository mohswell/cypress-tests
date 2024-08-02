Feature: Login into Solutechlabs
    As a user
    i want to login
    So that I can access my account

    # Positive scenarios

    # Scenario: Display all the necessary elements
    #     Given I visit the login page
    #     Then I should see the email input
    #     And I should see the password input
    #     And I should see the remember me checkbox
    #     And I should see the submit button

    # Scenario: Show password when eye icon is clicked
    #     Given I visit the login page
    #     When I type "password" into the password input
    #     And I click the eye icon
    #     Then the password input type should be "text"
    
    Scenario: Login with valid credentials
        Given I am on the login page
        When I enter valid credentials
        And I click on the login button
        Then I should be redirected to the dashboard page

    Scenario: Login with valid email address and invalid password
        Given I am on the login page
        When I enter valid email address and invalid password
        And I click on the login button
        Then I should see an error message

    Scenario: Login with valid password and invalid email address
        Given I am on the login page
        When I enter valid password and invalid email address
        And I click on the login button
        Then I should see an error message

    Scenario: User forgets password
        Given I am on the login page
        When I click on the forgot password link
        Then I should be redirected to the forgot password page


    Scenario: Test login attempts
        Given I am on the login page
        When I enter invalid credentials 10 times
        And I click on the login button
        Then I should see a login attempts error message
        And I should see a message that I have 7 minutes left

    # Negative scenarios
    Scenario: Login with invalid email address
        Given I am on the login page
        When I enter invalid email address
        And I click on the login button
        Then I should see an error message
    
    Scenario: Login with invalid password
        Given I am on the login page
        When I enter invalid password
        And I click on the login button
        Then I should see an error message

    Scenario: Login with empty credentials
        Given I am on the login page
        When I enter empty credentials
        And I click on the login button
        Then I should see an error message

