$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Swag_labs.feature");
formatter.feature({
  "line": 1,
  "name": "Swags_Labs",
  "description": "",
  "id": "swags-labs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid data",
  "description": "",
  "id": "swags-labs;login-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid login credentials  of set \u003cnumber\u003e \u0026 clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Navigates to product page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "swags-labs;login-with-valid-data;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 9,
      "id": "swags-labs;login-with-valid-data;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 10,
      "id": "swags-labs;login-with-valid-data;;2"
    },
    {
      "cells": [
        "1"
      ],
      "line": 11,
      "id": "swags-labs;login-with-valid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Login with valid data",
  "description": "",
  "id": "swags-labs;login-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid login credentials  of set 0 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Navigates to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 18027124200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "testcucum.user_enters_valid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 78696383400,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.navigates_to_product_page()"
});
formatter.result({
  "duration": 2458869700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login with valid data",
  "description": "",
  "id": "swags-labs;login-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters valid login credentials  of set 1 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Navigates to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 17088756100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "testcucum.user_enters_valid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 80158811500,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.navigates_to_product_page()"
});
formatter.result({
  "duration": 2111105700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "# For Invalid Credentials"
    }
  ],
  "line": 16,
  "name": "Login with Invalid data",
  "description": "",
  "id": "swags-labs;login-with-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters Invalid login credentials  of set \u003cnumber\u003e \u0026 clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Display an Error message with Invalid credentials",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "swags-labs;login-with-invalid-data;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 22,
      "id": "swags-labs;login-with-invalid-data;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 23,
      "id": "swags-labs;login-with-invalid-data;;2"
    },
    {
      "cells": [
        "3"
      ],
      "line": 24,
      "id": "swags-labs;login-with-invalid-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login with Invalid data",
  "description": "",
  "id": "swags-labs;login-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters Invalid login credentials  of set 2 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Display an Error message with Invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 16518777600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 46
    }
  ],
  "location": "testcucum.user_enters_Invalid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 5034554300,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.display_an_Error_message_with_Invalid_credentials()"
});
formatter.result({
  "duration": 787000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with Invalid data",
  "description": "",
  "id": "swags-labs;login-with-invalid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters Invalid login credentials  of set 3 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Display an Error message with Invalid credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 15244877500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 46
    }
  ],
  "location": "testcucum.user_enters_Invalid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 5126805000,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.display_an_Error_message_with_Invalid_credentials()"
});
formatter.result({
  "duration": 779000,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 28,
      "value": "# Adding all items to the cart"
    }
  ],
  "line": 30,
  "name": "Adding all items to the cart with valid data",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters valid login credentials  of set \u003cnumber\u003e \u0026 clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Select the Name AtoZ and Add to Cart the items",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Moving to About page and Click the Learn_More",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 37,
      "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 38,
      "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "Adding all items to the cart with valid data",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters valid login credentials  of set 0 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Select the Name AtoZ and Add to Cart the items",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Moving to About page and Click the Learn_More",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 17767956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "testcucum.user_enters_valid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 83749154600,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.select_the_Name_AtoZ_and_Add_to_Cart_the_items()"
});
formatter.result({
  "duration": 2453639300,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.moving_to_About_page_and_Click_the_Learn_More()"
});
formatter.result({
  "duration": 77063828600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Adding all items to the cart with valid data",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User enters valid login credentials  of set \u003cnumber\u003e \u0026 clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select the Name AtoZ and Add to Cart the items",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Verifying the first_product name and price",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 47,
      "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 48,
      "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "Adding all items to the cart with valid data",
  "description": "",
  "id": "swags-labs;adding-all-items-to-the-cart-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "Browser is launched \u0026 login page displayed",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User enters valid login credentials  of set 0 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "Select the Name AtoZ and Add to Cart the items",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Verifying the first_product name and price",
  "keyword": "Then "
});
formatter.match({
  "location": "testcucum.browser_is_launched_login_page_displayed()"
});
formatter.result({
  "duration": 19923681700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "testcucum.user_enters_valid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 62546375100,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.select_the_Name_AtoZ_and_Add_to_Cart_the_items()"
});
formatter.result({
  "duration": 2565696700,
  "status": "passed"
});
formatter.match({
  "location": "testcucum.Verifying_the_first_product_name_and_price()"
});
formatter.result({
  "duration": 3296781900,
  "status": "passed"
});
});