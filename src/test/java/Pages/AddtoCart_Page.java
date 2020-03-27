package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class AddtoCart_Page {
	
	
	
	WebDriver driver;
	int count=0;
	public String productname1;
	public String price1;
	public AddtoCart_Page(WebDriver driver)
	{
		this.driver=driver;
	}
	
	
	public void SearchA2Z() {               // selecting the Name (A to Z)
		
		
		WebElement wb=driver.findElement(By.xpath("//select[@class='product_sort_container']"));        
		Select DD=new Select(wb);
		DD.selectByVisibleText("Name (A to Z)");
		
	}
	
	
	public void Addtocart_btn() {          //  Clicking the Add to Cart Buttons                  
	
		
		for(int i=1;i<=6;i++)
		{
			count++;
			driver.findElement(By.xpath("//div[@class='inventory_item']["+i+"]//following::button")).click();
		}
		
	}
	public void LinkCart() 
	{
		
		driver.findElement(By.xpath("//a[@href=\"./cart.html\"]")).click();    // clicking on cart link
		productname1=  driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']")).getText();   //   getting first product name
		price1=driver.findElement(By.xpath("//div[text()='29.99']")).getText();   // getting first price name
	}
	
	
	public void verify_AddtoCart() throws InterruptedException {
		Thread.sleep(200);
		String num=driver.findElement(By.xpath("//a[@href='./cart.html']//span")).getText();
		int TotalAdding=Integer.parseInt(num);
		if(count==TotalAdding)
		{
			System.out.println("Items are added to cart ");
		}
		else {
			System.out.println("not added to the cart");
		}
	}

}
