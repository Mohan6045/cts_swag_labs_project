package Base_Class;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WrapperClass {
	static WebDriver dr;
	WebElement wb1;
	static int counter=0;

	public static WebDriver Launch_browser(String browser,String url)
	{
		//String ch1="C:\\Users\\BLTuser.BLT0189\\eclipse-workspace\\CTS_maven_125\\src\\test\\resources\\DRIVER"
		
		switch(browser)
		{
		case "CHROME":
			System.setProperty("webdriver.chrome.driver","src\\test\\resources\\Driver\\chromedriver.exe");
			dr=new ChromeDriver();
		break;
		case "FIREFOX":
			System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
			dr=new FirefoxDriver();
		break;
			
		}
		
		dr.get(url);
		
		
		return dr;
	}
	
	
	public WebElement WaitForElement(By locator,int timeout)
	{
		
		try
		{
		WebDriverWait WDW= new WebDriverWait(dr,timeout);
		 wb1=WDW.until(ExpectedConditions.visibilityOfElementLocated(locator));
		 return wb1;
		}
		catch (Exception e)
		{
			//System.out.println("no element found");
					return null;
		}
		
		
	}
	
	
	public WebElement WaitForClickable(By locator,int timeout)
	{
		
		try
		{
		WebDriverWait WDW= new WebDriverWait(dr,timeout);
		 wb1=WDW.until(ExpectedConditions.visibilityOfElementLocated(locator));
		 return wb1;
		}
		catch (Exception e)
		{
			System.out.println("no element found");
			return null;
		}
		
	}
	
	
	public static void Screenshot() {
		
		String path="src\\test\\resources\\ScreenShot\\";
		String filename=counter+".png";
		
		File f1=((TakesScreenshot)dr).getScreenshotAs(OutputType.FILE);		
		 File f2= new File(path+filename);
		 try {
			FileUtils.copyFile(f1, f2);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}   
		 counter++;
 
	}

}
