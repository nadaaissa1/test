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
(0, cucumber_1.When)('the customor give details {string}, {string},{string} ,{string} ,{string} ,{string} ,{string} ,{string} ,{string},{string}', async function (employeeID, lastName, middleName, firstName, loginName, userpassword, jobTitle, emailid, phone, mobile) {
    await (0, protractor_1.element)(protractor_1.By.name("employeeID")).sendKeys(employeeID);
    await (0, protractor_1.element)(protractor_1.By.name("lastName")).sendKeys(lastName);
    await (0, protractor_1.element)(protractor_1.By.name("middleName")).sendKeys(middleName);
    await (0, protractor_1.element)(protractor_1.By.name("firstName")).sendKeys(firstName);
    await (0, protractor_1.element)(protractor_1.By.name("loginName")).sendKeys(loginName);
    await (0, protractor_1.element)(protractor_1.By.name("userpassword")).sendKeys(userpassword);
    await (0, protractor_1.element)(protractor_1.By.name("jobTitle")).sendKeys(jobTitle);
    await (0, protractor_1.element)(protractor_1.By.name("emailid")).sendKeys(emailid);
    await (0, protractor_1.element)(protractor_1.By.name("phone")).sendKeys(phone);
    console.log(mobile);
    await (0, protractor_1.element)(protractor_1.By.xpath("//input[@name='mobile']")).sendKeys(mobile);
    //fffgyk
    //aa
});
(0, cucumber_1.When)('the Customor clicks on client', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-adduser[1]/form[1]/mat-form-field[6]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
    let options = (0, protractor_1.element)(protractor_1.By.xpath("//span[@class='mat-option-text'][normalize-space()='Focus']")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(4000);
});
(0, cucumber_1.When)('the Customor choose the role', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/mat-dialog-container[1]/app-adduser[1]/form[1]/mat-form-field[7]/div[1]/div[1]/div[3]/mat-select[1]/div[1]/div[2]/div[1]")).click();
    let options = (0, protractor_1.element)(protractor_1.By.xpath("//span[@class='mat-option-text'][normalize-space()='Admin']")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(4000);
});
(0, cucumber_1.When)('the Customor clicks on Enregistrer button', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("//button[@class='mat-focus-indicator text-white font-bold px-4 rounded mat-raised-button mat-button-base mat-accent']")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(4000);
});
(0, cucumber_1.When)('User clicks on Modif Profile  Icone', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("(//button[@class='mat-focus-indicator mat-fab mat-button-base mat-accent'])[1]")).click();
    console.log("yesssss");
    await protractor_1.browser.sleep(40000);
});
(0, cucumber_1.When)('User enters mobile {string}', { timeout: 60 * 1000 }, async function (string) {
    // Write code here that turns the phrase above into concrete actions
    var mail = (0, protractor_1.element)(protractor_1.By.name("emailid"));
    mail.clear();
    console.log("mail");
    await protractor_1.browser.sleep(10000); //
    await (0, protractor_1.element)(protractor_1.By.name("emailid")).sendKeys(string);
    await protractor_1.browser.sleep(10000);
});
(0, cucumber_1.Then)('User clicks on Enregistrer button', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("//button[@class='mat-focus-indicator text-white font-bold px-4 rounded mat-raised-button mat-button-base mat-accent']")).click();
    console.log("enregistre");
    await protractor_1.browser.sleep(4000);
});
//Modif userrr
(0, cucumber_1.When)('User enters recherche {string}', { timeout: 60 * 1000 }, async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/div[1]/div[2]/app-profile[1]/div[1]/div[1]/div[1]/table[1]/tr[1]/td[1]/app-userlist[1]/div[1]/div[1]/div[2]/mat-form-field[1]/div[1]/div[1]/div[1]/input[1]")).sendKeys(string);
    console.log("////////////////////");
    await protractor_1.browser.sleep(10000);
});
(0, cucumber_1.When)('User clicks on Modifier Icone', { timeout: 60 * 1000 }, async function () {
    await (0, protractor_1.element)(protractor_1.By.xpath("/html[1]/body[1]/app-root[1]/layout[1]/dense-layout[1]/div[1]/div[2]/app-profile[1]/div[1]/div[1]/div[1]/table[1]/tr[1]/td[1]/app-userlist[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[1]/td[8]/button[1]")).click();
    console.log("modif");
    await protractor_1.browser.sleep(40000);
});
// 
(0, cucumber_1.When)('user do the Modification', { timeout: 60 * 1000 }, async function (string) {
    var prenom = (0, protractor_1.element)(protractor_1.By.name("firstName"));
    prenom.clear();
    console.log("firstName");
    await protractor_1.browser.sleep(10000); //
    await (0, protractor_1.element)(protractor_1.By.name("firstName")).sendKeys(string);
    await protractor_1.browser.sleep(10000);
});
//portail d'administrationssssaaa
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZkNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0ZXBEZWZDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBa0Q7QUFDbEQsMkNBQWlGO0FBQ2pGLElBQUksSUFBSSxDQUFBO0FBQ1IsSUFBQSxnQkFBSyxFQUFFLGNBQWMsRUFBRyxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFDLEVBQUcsS0FBSztJQUVqRCxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFJOUMseUVBQXlFO0lBQ3pFLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFMUIsd0NBQXdDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBQSxlQUFJLEVBQUMsZ0NBQWdDLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBQyxFQUFHLEtBQUssV0FBVyxNQUFNO0lBQ2hGLG9FQUFvRTtJQUNwRSxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzNDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0lBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFBLGVBQUksRUFBQywrQkFBK0IsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUcsS0FBSyxXQUFXLE1BQU07SUFDakYsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxN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