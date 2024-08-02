Feature: Dashboard
    As a user
    I want to see the dashboard
    So that I can see the information

    Scenario: User visits the homepage
        Given I am aleady logged in
        When I visit the home page
        Then I should see the dashboard


    Scenario: The dashboard bar is displayed 
        Given I am at the homepage
        When I refresh the page
        Then I should see the dashboard 
    
     Scenario: Display nav bar
        Given I am at the homepage
        When I am already logged in

        Then I should see the Nav bar
        And I should see the <item>
        Examples: 
            | item               |
            | Solutech logo      |
            | search bar         |
            | user profile icon  |

    











    # Negative Scenarios
