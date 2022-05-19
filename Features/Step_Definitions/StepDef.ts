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


    //client 

  
    
    Given('the Customor clicks on Back-Office',{timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/fuse-vertical-navigation[1]/div[1]/div[2]/fuse-vertical-navigation-collapsable-item[1]/div[1]/div[1]")).click();
      console.log("back");
      await browser.sleep(40000);
    });
    
    Given('the Customor choose to click on client', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/fuse-vertical-navigation[1]/div[1]/div[2]/fuse-vertical-navigation-collapsable-item[1]/div[2]/fuse-vertical-navigation-basic-item[1]/div[1]/a[1]")).click();
      console.log("office");
      await browser.sleep(40000);
    });
   
    Given('And the Customor clicks on Add client Icone', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("//button[@class='mat-focus-indicator mat-fab mat-button-base mat-accent']")).click();
        
      console.log("add");
      await browser.sleep(40000);
    });

    Given('the customor give details {string}, {string},{string} ,{string} ', async function (organisation, tradeName, address, sector ) {
      await element(By.name("organisation")).sendKeys(organisation);
      
      await element(By.name("tradeName")).sendKeys(tradeName);
    
      await element(By.name("address")).sendKeys(address);
      
      await element(By.name("sector")).sendKeys(sector);
      
      
    });

    Given('the Customor clicks on Gestionnaire de Compte', {timeout: 60 * 1000} , async function () {
      await element(By.xpath("/html[1]/body[1]/div[3]/div[4]/div[1]/mat-dialog-container[1]/app-editclient[1]/form[1]/mat-form-field[5]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
      let options =  element(By.xpath("//span[@class='mat-option-text'][normalize-space()='malek khiri']")).click();
        
      console.log("yesssss");
      await browser.sleep(4000);
      
    });
    

    
    Given('the customor continue to give details {string} ,{string} ,{string} ', async function (firstContactUser, firstContactEmail, firstContactPhone ) {
     
      
      await element(By.name("firstContactUser")).sendKeys(firstContactUser);
      
      await element(By.name("firstContactEmail")).sendKeys(firstContactEmail);
      
      await element(By.name("firstContactPhone")).sendKeys(firstContactPhone);
      
    });