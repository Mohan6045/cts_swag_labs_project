
Feature: Swags_Labs

  Scenario Outline: Login with valid data
    Given Browser is launched & login page displayed
    When User enters valid login credentials  of set <number> & clicks on login
    Then Navigates to product page
    
    Examples: 
      | number |
      |      0 |
      |      1 |
      
      
    # For Invalid Credentials

   Scenario Outline: Login with Invalid data
    Given Browser is launched & login page displayed
    When User enters Invalid login credentials  of set <number> & clicks on login
    Then Display an Error message with Invalid credentials

    Examples: 
      | number |
      |      2 |
      |      3 |
      
      
      
      # Adding all items to the cart
      
     Scenario Outline: Adding all items to the cart with valid data
   	 Given Browser is launched & login page displayed
     When User enters valid login credentials  of set <number> & clicks on login
     Then Select the Name AtoZ and Add to Cart the items
   	Then Moving to About page and Click the Learn_More
   	
     Examples:  
      | number |
      |      0 | 
     