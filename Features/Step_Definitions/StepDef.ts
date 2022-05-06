import {Given,When,Then} from "@cucumber/cucumber"
import { browser, By, element, ExpectedConditions, protractor } from "protractor"
let vars
Given ('I launch Url' , {timeout: 60 * 10000} , async function(){
 
    await browser.get("http://10.5.14.179:8099");
    
 
   
   // await element(By.css("img[class='ng-tns-c358-2']")).sendKeys('Admin');
   await browser.sleep(40000)
   
   // browser.waitForAngularEnabled(false);
});
When('User enters UID field {string}', {timeout: 60 * 1000} , async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await element(By.xpath("//input[@id='username']")).sendKeys(string);
    console.log("***************************");
    browser.ignoreSynchronization = true
    await browser.sleep(10000)
  });
  
  
  When('User enters password {string}', {timeout: 60 * 1000} , async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await element(By.xpath("//input[@id='password']")).sendKeys(string);
    console.log("////////////////////");
    await browser.sleep(10000)
    });
  
    When('User clicks on Login button', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/empty-layout[1]/div[1]/div[1]/auth-sign-in[1]/div[1]/div[1]/div[1]/form[1]/button[1]")).click();
      
      console.log("yesssss");
      await browser.sleep(40000);
      
    });
   
  

    Then('It displays Dashboard Page', {timeout: 60 * 1000} , async function () {
      const text = await element(By.xpath("//table[@class='w-full ng-star-inserted']")).getText();
      console.log(text);
      //expect(text).toEqual("Hvvdggggggggggggggggg");
      
    });

    //user config


    When('User clicks on his account picture', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("(//span[@class='mat-button-wrapper'])[7]")).click();
      console.log("yesssss");
      await browser.sleep(40000);
    });

   

    When('User clicks on Profil', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("//div[@class='cdk-overlay-container']//button[2]")).click();
      
      console.log("yesssss");
      await browser.sleep(40000);
    });

    
    When('User clicks on Add User Icone', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("(//button[@class='mat-focus-indicator mat-fab mat-button-base mat-accent'])[2]")).click();
        
      console.log("yesssss");
      await browser.sleep(40000);
    });


    
      When('the customor give details {string}, {string},{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string},{string}', async function (employeeID, lastName, middleName, firstName, loginName, userpassword, jobTitle, emailid, phone , mobile ) {
        await element(By.name("employeeID")).sendKeys(employeeID);
        
        await element(By.name("lastName")).sendKeys(lastName);
      
        await element(By.name("middleName")).sendKeys(middleName);
        
        await element(By.name("firstName")).sendKeys(firstName);
        
        await element(By.name("loginName")).sendKeys(loginName);
        
        await element(By.name("userpassword")).sendKeys(userpassword);
        
        await element(By.name("jobTitle")).sendKeys(jobTitle);
        
        await element(By.name("emailid")).sendKeys(emailid);
        
        await element(By.name("phone")).sendKeys(phone);

        console.log(mobile);
        
        await element(By.xpath("//input[@name='mobile']")).sendKeys(mobile);

        

       //fffgyk
        
      //aa

        
    });


    When('the Customor clicks on client', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-adduser[1]/form[1]/mat-form-field[6]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
      let options =  element(By.xpath("//span[@class='mat-option-text'][normalize-space()='Focus']")).click();
        
      console.log("yesssss");
      await browser.sleep(4000);
      
    });


    When('the Customor choose the role', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-adduser[1]/form[1]/mat-form-field[7]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
      
      let options =  element(By.xpath("//span[@class='mat-option-text'][normalize-space()='Admin']")).click();
        
      console.log("yesssss");
      await browser.sleep(4000);
      
    });


    When('the Customor clicks on Enregistrer button', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("//button[@class='mat-focus-indicator text-white font-bold px-4 rounded mat-raised-button mat-button-base mat-accent']")).click();
      
      console.log("yesssss");
      await browser.sleep(4000);
      
    });
   
  
    //Modif userrr


    


    When('User clicks on NextButton', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/div[1]/div[2]/app-profile[1]/div[1]/div[1]/div[1]/table[1]/tr[1]/td[1]/app-userlist[1]/div[1]/div[3]/mat-paginator[1]/div[1]/div[1]/div[2]/button[3]")).click();
        
      console.log("yes");
      await browser.sleep(4000);
      //d
    });

    When('User clicks on Modifier Icone', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("(//button[@title='Modifier'])[2]")).click();
        
      console.log("yesssss");
      await browser.sleep(40000);
    });



    When('user do the Modification', {timeout: 60 * 1000} , async function  (string) {
      await element(By.xpath("//input[@id='mat-input-15']")).sendKeys(string);
    console.log("/////");
    await browser.sleep(10000)
    });


   

    
    




    //portail d'administrationssssaaa



    
  