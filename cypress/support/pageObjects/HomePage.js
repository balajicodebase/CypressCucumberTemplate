class HomePage
{
getEditBox(){
    return cy.get('.form-group input[name="name"]')
}
getTwoWayDataBinding(){
    return cy.get(':nth-child(4) > .ng-untouched')
}
getGender(){
   return cy.get('select')
}
getEnterprenaur(){
   return cy.get('#inlineRadio3')
}
getShopTab(){
    return cy.get('a[href="/angularpractice/shop"]')
}

}

export default HomePage;