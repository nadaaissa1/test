Feature: Test Recruit Application
  
  Scenario: Login Test
    Given I launch Url
    When User enters UID field "admin"
    And User enters password "admin"
    And User clicks on Login button
    Then It displays Dashboard Page

  Scenario: User Config
    When User clicks on his account picture
    And User clicks on Profil 
    And User clicks on Add User Icone 
    And the customor give details "<employeeID>", "<lastName>","<middleName>" ,"<firstName>" ,"<loginName>" ,"<userpassword>" ,"<jobTitle>" ,"<emailid>" ,"<phone>" ,"<mobile>" ,"<client>" ,"<role>" 
   
    
        Examples:
            | employeeID | lastName | middleName | firstName | loginName | userpassword | jobTitle | emailid | phone | mobile | client | role 
            | 1532 | asmaa | Asma | Asmaa | Asma | Asma | stagiaire | asma1@gmail.com | 50741685 | 71852692 | Focus | Admin 