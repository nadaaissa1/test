 Scenario: Login Test
    Given I launch Url
    When User enters UID field "admin"
    And User enters password "admin"
    And User clicks on Login button
    Then It displays Dashboard Page
 
 
 
 
 Scenario: Back-Office  
    And the Customor clicks on Back-Office
    And the Customor choose to click on client 
    And the Customor clicks on Enregistrer button