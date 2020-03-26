package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class AddtoCart_Page {
	
	
	
	WebDriver dr;
	int count=0;
	public AddtoCart_Page(WebDriver dr)
	{
		this.dr=dr;
	}
	
	
	public void SearchA2Z() {               // selecting the Name (A to Z)
		
		
		WebElement wb=dr.findElement(By.xpath("//select[@class='product_sort_container']"));        
		Select DD=new Select(wb);
		DD.selectByVisibleText("Name (A to Z)");
		
	}
	
	
	public void Addtocart_btn() {          //  Clicking the Add to Cart Buttons                  
	
		
		for(int i=1;i<=6;i++)
		{
			count++;
			dr.findElement(By.xpath("//div[@class='inventory_item']["+i+"]//following::button")).click();
		}
		
	}
	
	
	public void verify_AddtoCart() throws InterruptedException {
		Thread.sleep(200);
		String num=dr.findElement(By.xpath("//a[@href='./cart.html']//span")).getText();
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
