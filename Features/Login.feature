Feature: Test Recruit Application
  
  Scenario: Login Test
    Given I launch Url
    When User enters UID field "admin"
    And User enters password "admin"
    And User clicks on Login button
    Then It displays Dashboard Page

  Scenario: Back-Office  
    And the Customor clicks on Back-Office
    And the Customor choose to click on client 
    And the Customor clicks on Add client Icone
    And the customor give details "<organisation>", "<tradeName>","<address>" ,"<sector>" 
    Examples:
            | organisation | tradeName | address | sector | 
            | focus | focus corporation | chotrana | electronique |

  
  Scenario: Drop Down for Client 
     And the Customor clicks on Gestionnaire De Compte 
  

  Scenario: Back-Office 2
     And  the customor continue to give details "<firstContactUser>", "<firstContactEmail>", "<firstContactPhone>"
     Examples:
              | firstContactUser | firstContactEmail |  firstContactPhone |   
              |  mouhemed        | mouhamed@focus.tn |72355190            |
    
  Scenario: enregistrer et modifier 
     And the Customor clicks on save button
     When the Customor clicks on Modifier Icone
     When the Customor do the Modification  "chtourou"
     Then clicks on Enregistrer button