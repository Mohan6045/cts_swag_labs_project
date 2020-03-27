package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class About_Page {
	
	// //a[@href='https://saucelabs.com/']\
	WebDriver driver;

	
	public About_Page(WebDriver driver)
	{
		this.driver=driver;
	}
	
	public void link_for_aboutpage() {
		System.out.println("link clicekd");
		driver.findElement(By.xpath("//div[@class='bm-burger-button']")).click();
		
		
	}
	
	public void About_Saucedemo() throws InterruptedException {
		
		Thread.sleep(100);
		driver.findElement(By.xpath("//nav[@class='bm-item-list']//child::a[2]")).click();
		
	}
	public void any_btn()
	{
		// //div[@class='content-container']//following::a[1]
		driver.findElement(By.xpath(" //div[@class='content-container']//following::a[1]")).click();
		
	}

}
