package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Base_Class.WrapperClass;

public class Login_page  extends  WrapperClass{           //   Login page
	
	
	By usr=By.xpath("//input[@id='user-name']");
	By pwd=By.xpath("//input[@id='password']");
	By CLCK=By.xpath("//input[@class='btn_action']");
	By Txt_ver=By.xpath("//h3[@data-test='error']");
	By Txt_ver1=By.xpath("//div[@class='product_label']");
	
	public String Products;
	public String Error;
	
	 WebDriver dr;
	public Login_page(WebDriver dr)
	{
		this.dr=dr;
	}
	
	public void Username(String  name)        //   Entering Username
	{
		WebElement wt1=WaitForElement(usr,20);         
		wt1.sendKeys(name);
	}
	
	public void Password(String  passwd)      // Entering Password
	{
		WebElement wt2=WaitForElement(pwd,20);
		wt2.sendKeys(passwd);
	}
	public void CLK_BTN()                     //  Clicking Login Button
	{
		WebElement wt3=WaitForElement(CLCK,20);
		wt3.click();
	}
	
	
	
	public  void Total_Login(String Usrname,String Pswd)      //  Calling Total Login Functions
	{
		System.out.println(Usrname+" "+Pswd);
		this.Username(Usrname);
		this.Password(Pswd);
		this.CLK_BTN();
		this.verify_login();
		
		
	}
	
	
	public void verify_login()     //  verifying the Login 
	{
		
		try {
			
		
		WebElement wt4=WaitForElement(Txt_ver,20);
		Error =wt4.getText();
		//System.out.println(Error);
		Screenshot();
	
		}
		catch(Exception e)
		{
		WebElement wt5=WaitForElement(Txt_ver1,20);
		Products=wt5.getText();
		
		//System.out.println(Products);
		}
		
	}	

}
