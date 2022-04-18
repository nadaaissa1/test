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
//user config
(0, cucumber_1.When)('User clicks on his account picture', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("(//span[@class='mat-button-wrapper'])[7]")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.When)('User clicks on Profil', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("//div[@class='cdk-overlay-container']//button[2]")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.When)('User clicks on Add User Icone', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("(//button[@class='mat-focus-indicator mat-fab mat-button-base mat-accent'])[2]")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.When)('the customor give details {string}, {string},{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string}', async function (employeeID, lastName, middleName, firstName, loginName, userpassword, jobTitle, emailid, phone, mobile, client, role) {
    await (0, protractor_1.element)(protractor_1.By.name("employeeID")).sendKeys(employeeID);
    await (0, protractor_1.element)(protractor_1.By.name("lastName")).sendKeys(lastName);
    await (0, protractor_1.element)(protractor_1.By.name("middleName")).sendKeys(middleName);
    await (0, protractor_1.element)(protractor_1.By.name("firstName")).sendKeys(firstName);
    await (0, protractor_1.element)(protractor_1.By.name("loginName")).sendKeys(loginName);
    await (0, protractor_1.element)(protractor_1.By.name("userpassword")).sendKeys(userpassword);
    await (0, protractor_1.element)(protractor_1.By.name("jobTitle")).sendKeys(jobTitle);
    await (0, protractor_1.element)(protractor_1.By.name("emailid")).sendKeys(emailid);
    await (0, protractor_1.element)(protractor_1.By.name("phone")).sendKeys(phone);
    await (0, protractor_1.element)(protractor_1.By.name("mobile")).sendKeys(mobile);
    await (0, protractor_1.element)(protractor_1.By.xpath("//div[@id='mat-select-value-7']")).click();
    await (0, protractor_1.element)(protractor_1.By.xpath("//div[@id='mat-select-value-9']")).click();
});
//portail d'administrationssssaaa
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBa0Q7QUFDbEQsMkNBQWlGO0FBQ2pGLElBQUksSUFBSSxDQUFBO0FBQ1IsSUFBQSxnQkFBSyxFQUFFLGNBQWMsRUFBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFDLEVBQUcsS0FBSztJQUVqRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFJOUMseUVBQXlFO0lBQ3pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFMUIsd0NBQXdDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsZ0NBQWdDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBQyxFQUFHLEtBQUssV0FBVyxNQUFNO0lBQ2hGLG9FQUFvRTtJQUNwRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzNDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQywrQkFBK0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUcsS0FBSyxXQUFXLE1BQU07SUFDakYsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FB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