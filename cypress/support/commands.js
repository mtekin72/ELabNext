
import loginPage, { loginpage } from "../integration/WebElements/LoginPageElements/loginPageElements"
import userData,{email,password} from '../fixtures/userData.json'

Cypress.Commands.add("logIn", (email, password) => {
  cy.get(loginpage.useremailfiled,{ timeout: 4000 },{ force: true }).clear().type(userData.email)
  cy.get(loginpage.passwordfield,{ timeout: 4000 },{ force: true }).clear().type(userData.password)
  cy.get(loginpage.loginsubmit,{ timeout: 4000 }).click({force:true})
  cy.wait(3000)

})

Cypress.Commands.add("logOut", () => {
cy.get(loginpage.logout,{timeout:3000}).eq(0).invoke('show').click({force:true})
cy.get(loginpage.loginbutton).should('be.visible')
cy.getText(loginpage.loginwindowtitle,'Login')

})


Cypress.Commands.add('getText', (element,expectedtext) => {
    cy.get(element,{timeout:9000},{force:true}).then(($el) => {
      const txt = $el.text().replace(/(\r\n|\n|\r)/gm, "")
      const elementtext=txt.replace(" ","")
      expect(elementtext).to.contain(expectedtext);
    })
    })

  