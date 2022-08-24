/// <reference types="Cypress" />
import  { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductPage from "../../../../support/pageObjects/ProductPage"

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open ecommerce page",()=>
{
    cy.visit(Cypress.env('url')+ '/angularpractice')
})

When("I add items to cart",function(){
    homePage.getShopTab().click()
        this.data.productName.forEach(prod => {
            cy.selectProduct(prod)
        });
        productPage.getCheckoutButton().click()
})

When("I fill the form details", function(dataTable){
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(dataTable.rawTable[1][0])
})

Then("Validate the forms behaviour",function(){
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)
    homePage.getEnterprenaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout',7000)
})

And("selct the shop page",function(){
    homePage.getShopTab().click() 
})

And("Validate the total prices",()=>{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each((ele)=>{
        var valueText = ele.text()
        var value = valueText.split(" ")
        value = value[1].trim()
        cy.log(value)
        sum = sum + Number(value)
    })
    cy.get('td h3 strong').then((ele2)=>{
        const amount = ele2.text()
        var res = amount.split(" ")
        const total = res[1].trim()
        expect(Number(total)).to.equal(Number(sum))
    })
    cy.contains('Checkout').click()
})

Then("select the country and verify Thankyou",function(){
    cy.get('#country').type(this.data.country)
    cy.get('div[class="input-field col s12"]').next().click()
    cy.get('.checkbox').click()
    cy.get('input[type="submit"]').click()
    // cy.get('.alert').should('have.text','Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then((e1) =>{
        const actualText = e1.text()
        expect(actualText.includes('Success')).to.be.true
    })
})