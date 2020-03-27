package Runner_PKG_FireFox;



import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
@CucumberOptions(features="src\\main\\resources\\FEATURE",
					glue="STEP_DEF_PKG_FireFox",
					plugin = { "html:reports/cucumber-html-report",
							"json:reports/cucumber-html-report/jsonreport",
							})

public class TestRunner extends AbstractTestNGCucumberTests {
  
}
