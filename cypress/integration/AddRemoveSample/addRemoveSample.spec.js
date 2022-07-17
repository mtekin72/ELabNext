/// <reference types="cypress" />
import { Given, When, And, Then, } from "cypress-cucumber-preprocessor/steps"
import inventoryElements from "../WebElements/InventoryElements/inventoryElements"
import journalDashboardElements from "../WebElements/JournalElements/journalDashboardElements"
import loginPageElements, { loginpage } from "../WebElements/LoginPageElements/loginPageElements"



Given('user navigates to loginpage', () => {
  cy.visit('/')

})

When('user enters valid email and password', () => {
  cy.logIn()
  cy.url().should('include','elabjournal.com/members/')
  cy.title().should('eq','Dashboard Electronic Lab Notebook - eLabJournal')
 
  
})

And('user should be able to successfully login', () => {
  cy.get(loginpage.currentactivegroup).should('be.visible')
cy.getText(loginPageElements.loginpage.currentactivegroup,'Ranorex')

})

And('user shoule be landed to Dashboard', () => {

  cy.getText(journalDashboardElements.dashboard.header,'Dashboard')
  cy.getText(journalDashboardElements.dashboard.Samplesbutton,'Samples')
  

  
})
And('user navigates to Samples', () => {
 cy.get(journalDashboardElements.dashboard.Samplesbutton,{ timeout: 4000 }).click({force:true})
 cy.url().should('include','members/inventory/samples/')

})
And('user click -Add Sample- button', () => {
cy.get(journalDashboardElements.Samples.addsamplebutton).click()

})
And('user selects  -sample type ranorex- {string} from options', (value) => {
//cy.get(journalDashboardElements.Samples.newsampletype).click()
cy.get(journalDashboardElements.Samples.new_sample_type).select(1).should('have.value', value)
cy.url().should('include','addSampleLoadGroup')


})

And('user clicks -Proceed- button', () => {
cy.get(inventoryElements.inventoryBrowser.proceedbutton).click({force:true})
cy.wait(2000)

})

And('user should be landed to Inventory-Browser Tab {string}', (pagetitle) => {
cy.getText(inventoryElements.inventoryBrowser.header,pagetitle)


})

And('user fill {string} on name  field {string}', (text,fieldname) => {

  cy.get(inventoryElements.inventoryBrowser.samplenamefield).clear().type(text)
  cy.getText(inventoryElements.inventoryBrowser.panelsamplanametitle,fieldname)

})
And('user clicks -Save and Close- button', () => {

  cy.get(inventoryElements.inventoryBrowser.save_and_closebutton).click({force:true})

})
Then('user should see Samples Lists table {string} ,{string} ,{string} information', (Name,Owner,Types) => {
  
  cy.get(inventoryElements.inventoryBrowser.name).eq(0).should('have.text',Name)
  cy.get(inventoryElements.inventoryBrowser.owner).eq(0).should('have.text',Owner)
  cy.get(inventoryElements.inventoryBrowser.type).eq(0).should('have.text',Types)

})
Then('user should remove Sample {string}', (Name) =>{
  cy.get(inventoryElements.inventoryBrowser.delete_sample_button).eq(0).click({force:true})
  cy.get(inventoryElements.inventoryBrowser.deleteconfirm).click({force:true})
  cy.get(inventoryElements.inventoryBrowser.sample_list_table).should('not.contain.text',Name)


})

Then('LogOut', () =>{
cy.logOut()

})