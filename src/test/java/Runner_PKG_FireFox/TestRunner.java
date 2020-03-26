package Runner_PKG_FireFox;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@CucumberOptions(features="src\\main\\resources\\FEATURE",glue="STEP_DEF_PKG_FireFox")

public class TestRunner extends AbstractTestNGCucumberTests {
  
}
