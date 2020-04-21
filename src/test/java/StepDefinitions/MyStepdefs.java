package StepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MyStepdefs {
    WebDriver driver;
    @Given("I launch chrome browser")
    public void iLaunchChromeBrowser() {
        System.setProperty("webdriver.chrome.driver","/Users/sagehassel/Downloads/chromedriver-4" );
        driver = new ChromeDriver();
    }

    @When("I open the local host")
    public void iOpenTheLocalHost() {
        driver.get("http://localhost:3000/");
    }

    @Then("I verify the website has loaded")
    public void iVerifyTheWebsiteHasLoaded() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/h1")));
        boolean status = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/h1")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @And("I close the browser")
    public void iCloseTheBrowser() {
        driver.quit();
    }

    @Given("I open the website")
    public void iOpenTheWebsite() {
        //System.setProperty("webdriver.chrome.driver","/Users/sagehassel/Downloads/chromedriver-4" );
        //driver = new ChromeDriver();
        //driver.get("http://localhost:3000/");
        iLaunchChromeBrowser();
        iOpenTheLocalHost();
    }

    @When("I enter my username and password")
    public void iEnterMyUsernameAndPassword() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/form[1]/div/input[1]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/form[1]/div/input[1]")).sendKeys("regular");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/form[1]/div/input[2]")).sendKeys("password");
    }

    @And("I push login")
    public void iPushLogin() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/form[1]/div/button")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/form[1]/div/button")).click();
    }

    @Then("I will be redirected to the homepage")
    public void iWillBeRedirectedToTheHomepage() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div")));
        boolean status = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div")).isDisplayed();
        Assert.assertEquals(true,status);
        driver.quit();
    }

    @When("I enter not my username and password")
    public void iEnterNotMyUsernameAndPassword() {
    }

    @Then("I will be shown an error")
    public void iWillBeShownAnError() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Error logging in please try again",alertText);
        driver.quit();
    }

    @Given("I open the website and login")
    public void iOpenTheWebsiteAndLogin() {
        iLaunchChromeBrowser();
        iOpenTheLocalHost();
        iEnterMyUsernameAndPassword();
    }

    @When("I click on the Request tab")
    public void iClickOnTheRequestTab() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[2]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[2]")).click();
    }

    @And("I am brought to the Request page")
    public void iAmBroughtToTheRequestPage() {
        WebDriverWait wait = new WebDriverWait(driver,5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(.,'Submit Request')]")));
        boolean status = driver.findElement(By.xpath("//button[contains(.,'Submit Request')]")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @And("I enter an item, amount and location")
    public void iEnterAnItemAmountAndLocation() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")).sendKeys("concrete");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[2]")).sendKeys("100 lbs");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[3]")).sendKeys("Minnesota");


    }

    @When("I click submit request")
    public void iClickSubmitRequest() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")).click();
    }

    @Then("The request will successfully add")
    public void theRequestWillSuccessfullyAdd() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Request submitted",alertText);
        driver.quit();

    }

    @Then("The request will not add")
    public void theRequestWillNotAdd() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Error submitting request, please try again",alertText);
        driver.quit();
    }

    @And("I enter an incorrect item, amount and location")
    public void iEnterAnIncorrectItemAmountAndLocation() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")).sendKeys("");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[2]")).sendKeys("");
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[3]")).sendKeys("");
    }
}
