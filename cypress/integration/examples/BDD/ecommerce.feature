Feature: End to end ECommerce validation

    application regression

    @regression @smoke
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country and verify Thankyou
    
    @smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
    |Gender |
    |Male |
    Then Validate the forms behaviour
    And selct the shop page
    