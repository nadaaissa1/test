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
    
  
  Scenario: User Config
    When User clicks on his account picture
    And User clicks on Profil
    And User clicks on Add User Icone 
    And the customor give details "<employeeID>", "<lastName>","<middleName>" ,"<firstName>" ,"<loginName>" ,"<userpassword>" ,"<jobTitle>" ,"<emailid>" ,"<phone>","<mobile>"   
   
    
        Examples:
            | employeeID | lastName | middleName | firstName | loginName | userpassword | jobTitle | emailid | phone | mobile | 
            | 1532 | asmaa | Asma | Asmaa | Asma | Asma | stagiaire | asma1@gmail.com | 50741685 | 71852692 |
  

  Scenario: Drop Down 
    And the Customor clicks on client
    And the Customor choose the role
    And the Customor clicks on Enregistrer button

    And User clicks on Modif Profile  Icone 
    When User enters mobile "nada.aissa9623@gmail.com"
    Then  User clicks on Enregistrer button
   
  
    

  Scenario: Modification User 
    When User enters recherche "saif"
   
    When User clicks on Modifier Icone
    When user do the Modification  "chtourou"
    Then clicks on Enregistrer button
