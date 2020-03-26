package STEP_DEF_PKG_FireFox;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Base_Class.Get_Excel;
import Base_Class.WrapperClass;
import Pages.About_Page;
import Pages.AddtoCart_Page;
import Pages.Login_page;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class testcucum extends Get_Excel{
	static WebDriver dr;
	Login_page Ln;
	
	static final Logger log = Logger.getLogger(testcucum.class);
	@Given("^Browser is launched & login page displayed$")
	public void browser_is_launched_login_page_displayed()  {
		get_Excel();
		 dr=WrapperClass.Launch_browser("FIREFOX","https://www.saucedemo.com/");
		 dr.manage().window().maximize();
		 log.info(" FIREFOX Browser is Successfully launched");

	    
	}

	@When("^User enters valid login credentials  of set (\\d+) & clicks on login$")
	public void user_enters_valid_login_credentials_of_set_clicks_on_login(int arg1)  {
		System.out.println("User enters login credentials & clicks on login");
		log.info("Login for valid data");
		int row=arg1;
		String Username=testdata[row][0];
		String Password=testdata[row][1];
		dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		  Ln=new Login_page(dr);
		  System.out.println(Username+" "+Password);
		Ln.Total_Login(Username,Password);
		log.info("succesfully login is happened with valid data");
		WrapperClass w1=new WrapperClass();
		w1.Screenshot();
		log.info("ScreenShot has taken sucessfully for login data");

		
	}
	@Then("^Navigates to product page$")
	public void navigates_to_product_page() {
		
		System.out.println("Sucessfully navigated to "+Ln.Products+" page");
		log.info("Sucessfully navigated to products page");
		log.info("-----------------------------------");
		dr.close();
	}
	
	
		
		// for  Invalid Username and Password
		
		@When("^User enters Invalid login credentials  of set (\\d+) & clicks on login$")
		public void user_enters_Invalid_login_credentials_of_set_clicks_on_login(int arg1) {
			log.info("Login for Invalid data");
			int row=arg1;
			String Username=testdata[row][0];
			String Password=testdata[row][1];
			dr.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			  Ln=new Login_page(dr);
			  System.out.println(Username+" "+Password);
			Ln.Total_Login(Username,Password);
			log.info("Entered invalid data in login form");
			
			dr.close();
		}

		@Then("^Display an Error message with Invalid credentials$")
		public void display_an_Error_message_with_Invalid_credentials() {
			log.info(Ln.Error+" got error message for invalid data");
			log.info("-----------------------------------");		
			System.out.println(Ln.Error);
	
		}
		@Then("^Select the Name AtoZ and Add to Cart the items$")
		public void select_the_Name_AtoZ_and_Add_to_Cart_the_items() throws InterruptedException  {
			System.out.println("successful login happens & profile name displayed correctly");
			
			 AddtoCart_Page A1=new AddtoCart_Page(dr);
			  A1.SearchA2Z();
			  A1.Addtocart_btn();
			  A1.verify_AddtoCart();
			  log.info("Added all the items to the cart and verified products count");
			  WrapperClass w1=new WrapperClass();
				w1.Screenshot();
				log.info("ScreenShot has taken sucessfully for the products that are added");
				
		}
			
			@Then("^Moving to About page and Click the Learn_More$")
			public void moving_to_About_page_and_Click_the_Learn_More() throws InterruptedException {
				 About_Page A2=new About_Page(dr);
				  A2.link_for_aboutpage();
				  log.info("succesfully navigated to home page ");
				  A2.About_Saucedemo();
				  A2.any_btn();
				Thread.sleep(200);
				log.info("-----------------------------------");
				dr.close();
				  
			}
		
		
		
		
		
		
}