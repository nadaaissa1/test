"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
let vars;
(0, cucumber_1.Given)('I launch Url', { timeout: 60 * 10000 }, async function () {
    await protractor_1.browser.get("http://10.5.14.179:8099");
    // await element(By.css("img[class='ng-tns-c358-2']")).sendKeys('Admin');
    await protractor_1.browser.sleep(40000);
    // browser.waitForAngularEnabled(false);
});
(0, cucumber_1.When)('User enters UID field {string}', { timeout: 60 * 1000 }, async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await (0, protractor_1.element)(protractor_1.By.xpath("//input[@id='username']")).sendKeys(string);
    console.log("***************************");
    protractor_1.browser.ignoreSynchronization = true;
    await protractor_1.browser.sleep(10000);
});
(0, cucumber_1.When)('User enters password {string}', { timeout: 60 * 1000 }, async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await (0, protractor_1.element)(protractor_1.By.xpath("//input[@id='password']")).sendKeys(string);
    console.log("////////////////////");
    await protractor_1.browser.sleep(10000);
});
(0, cucumber_1.When)('User clicks on Login button', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/empty-layout[1]/div[1]/div[1]/auth-sign-in[1]/div[1]/div[1]/div[1]/form[1]/button[1]")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.Then)('It displays Dashboard Page', { timeout: 60 * 1000 }, async function () {
    const text = await (0, protractor_1.element)(protractor_1.By.xpath("//table[@class='w-full ng-star-inserted']")).getText();
    console.log(text);
    //expect(text).toEqual("Hvvdggggggggggggggggg");
});
//client 
(0, cucumber_1.Given)('the Customor clicks on Back-Office', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/fuse-vertical-navigation[1]/div[1]/div[2]/fuse-vertical-navigation-collapsable-item[1]/div[1]/div[1]")).click();
    console.log("back");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.Given)('the Customor choose to click on client', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/fuse-vertical-navigation[1]/div[1]/div[2]/fuse-vertical-navigation-collapsable-item[1]/div[2]/fuse-vertical-navigation-basic-item[1]/div[1]/a[1]")).click();
    console.log("office");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.Given)('And the Customor clicks on Add client Icone', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("//button[@class='mat-focus-indicator mat-fab mat-button-base mat-accent']")).click();
    console.log("add");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.Given)('the customor give details {string}, {string},{string} ,{string} ', async function (organisation, tradeName, address, sector) {
    await (0, protractor_1.element)(protractor_1.By.name("organisation")).sendKeys(organisation);
    await (0, protractor_1.element)(protractor_1.By.name("tradeName")).sendKeys(tradeName);
    await (0, protractor_1.element)(protractor_1.By.name("address")).sendKeys(address);
    await (0, protractor_1.element)(protractor_1.By.name("sector")).sendKeys(sector);
});
(0, cucumber_1.Given)('the Customor clicks on Gestionnaire de Compte', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/div[3]/div[4]/div[1]/mat-dialog-container[1]/app-editclient[1]/form[1]/mat-form-field[5]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
    let options = (0, protractor_1.element)(protractor_1.By.xpath("//span[@class='mat-option-text'][normalize-space()='malek khiri']")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(4000);
});
(0, cucumber_1.Given)('the customor continue to give details {string} ,{string} ,{string} ', async function (firstContactUser, firstContactEmail, firstContactPhone) {
    await (0, protractor_1.element)(protractor_1.By.name("firstContactUser")).sendKeys(firstContactUser);
    await (0, protractor_1.element)(protractor_1.By.name("firstContactEmail")).sendKeys(firstContactEmail);
    await (0, protractor_1.element)(protractor_1.By.name("firstContactPhone")).sendKeys(firstContactPhone);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBa0Q7QUFDbEQsMkNBQWlGO0FBQ2pGLElBQUksSUFBSSxDQUFBO0FBQ1IsSUFBQSxnQkFBSyxFQUFFLGNBQWMsRUFBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFDLEVBQUcsS0FBSztJQUVqRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFJOUMseUVBQXlFO0lBQ3pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFMUIsd0NBQXdDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsZ0NBQWdDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBQyxFQUFHLEtBQUssV0FBVyxNQUFNO0lBQ2hGLG9FQUFvRTtJQUNwRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzNDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQywrQkFBK0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUcsS0FBSyxXQUFXLE1BQU07SUFDakYsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FB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