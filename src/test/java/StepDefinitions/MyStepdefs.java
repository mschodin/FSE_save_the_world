package StepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
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
        Assert.assertEquals("Request submitted!",alertText);
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

    @When("I click on the Donate tab")
    public void iClickOnTheDonateTab() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[3]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[3]")).click();
    }

    @And("I am brought to the Donate page")
    public void iAmBroughtToTheDonatePage() {
        WebDriverWait wait = new WebDriverWait(driver,5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(.,'Submit Donation')]")));
        boolean status = driver.findElement(By.xpath("//button[contains(.,'Submit Donation')]")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @When("I click submit donation")
    public void iClickSubmitDonation() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")).click();
    }

    @Then("The donation will successfully add")
    public void theDonationWillSuccessfullyAdd() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Pledge submitted, Thank you!",alertText);
        driver.quit();

    }

    @Then("The donation will not add")
    public void theDonationWillNotAdd() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Error submitting pledge, please try again",alertText);
        driver.quit();
    }

    @When("I click on the Match tab")
    public void iClickOnTheMatchTab() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[4]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[4]")).click();
    }

    @And("I am brought to the Match page")
    public void iAmBroughtToTheMatchPage() {
        WebDriverWait wait = new WebDriverWait(driver,5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(.,'Match Donation and Request')]")));
        boolean status = driver.findElement(By.xpath("//button[contains(.,'Match Donation and Request')]")).isDisplayed();
        Assert.assertEquals(true,status);
    }

    @And("I see the match table")
    public void iSeeTheMatchTable() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"donations\"]")));
        boolean status = driver.findElement(By.xpath("//*[@id=\"donations\"]")).isDisplayed();
        Assert.assertEquals(true,status);
        boolean status2 = driver.findElement(By.xpath("//*[@id=\"requests\"]")).isDisplayed();
        Assert.assertEquals(true,status2);
    }

    String item1 = "", item2 = "";
    @When("I enter a donation id and request id")
    public void iEnterADonationIdAndRequestId() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")));
        // get id of first donation
        item1 = driver.findElement(By.xpath("//*[@id=\"donations\"]/tbody/tr[2]/td[2]")).getText();
        // get id of first request
        item2 = driver.findElement(By.xpath("//*[@id=\"requests\"]/tbody/tr[2]/td[2]")).getText();
        //match first donation and first request
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[1]")).sendKeys(item1);
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/input[2]")).sendKeys(item2);
    }

    @And("I click submit match")
    public void iClickSubmitMatch() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div/form/div/button")).click();

    }

    @Then("The match will successfully be added")
    public void theMatchWillSuccessfullyBeAdded() {
        //click on home tab
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[1]")));
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/ol/li[1]")).click();
        //ensure those two items are matched
       wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("")));
       String test1 = driver.findElement(By.xpath("//*[@id=\"matches\"]/tbody/tr[last()]/td[1]")).getText();
       String test2 = driver.findElement(By.xpath("//*[@id=\"matches\"]/tbody/tr[last()]/td[2]")).getText();
       Assert.assertEquals(item1, test1);
       Assert.assertEquals(item2, test2);
    }

    @When("I enter a donation id and request id incorrectly")
    public void iEnterADonationIdAndRequestIdIncorrectly() {
    }

    @Then("The match will not be added")
    public void theMatchWillNotBeAdded() {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        Assert.assertEquals("Error submitting match, please try again",alertText);
        driver.quit();
    }
}
