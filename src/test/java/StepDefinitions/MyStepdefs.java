package StepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MyStepdefs {
    WebDriver driver;
    @Given("I launch chrome browser")
    public void iLaunchChromeBrowser() {
        System.setProperty("webdriver.chrome.driver","/Users/sagehassel/Downloads/chromedriver-2" );
        driver = new ChromeDriver();
    }

    @When("I open the local host")
    public void iOpenTheLocalHost() {
        driver.get("localhost:3000");
    }

    @Then("I verify hello world is present")
    public void iVerifyHelloWorldIsPresent() {
        boolean status = driver.findElement(By.xpath("//*[@id=\"root\"]/div/p")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @And("I close the browser")
    public void iCloseTheBrowser() {
        driver.quit();
    }
}
