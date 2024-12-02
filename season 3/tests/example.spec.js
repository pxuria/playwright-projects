import { test, expect } from "@playwright/test"

// season 3
test("google first test", async ({ browser }) => {
  // create new page ==============================
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://google.com")
  await expect(page).toHaveTitle("Google")
  console.log(await page.title())
})


// season 4
test("rahulshettyacademy first test", async ({ page }) => {
  const userName = page.locator("#username");
  const signinBtn = page.locator("#signInBtn");
  const cardTitles = page.locator(".card-body .card-title a")

  await page.goto("https://rahulshettyacademy.com/loginpagePractise")
  console.log(await page.title());

  // selectors [css , xpath] ========================================
  // filling
  await userName.fill("rahulshettyacademy ");
  await page.locator("[type='password']").fill("learning");

  // clicking =======================================================
  await signinBtn.click();

  // wait until this locator shown up page ==========================
  console.log(await page.locator("[style*='block']").textContent())

  // check text content =============================================
  await expect(page.locator("[style*='block']")).toContainText("Incorrect");

  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await signinBtn.click();

  // both of them are same
  // console.log(await cardTitles.first().textContent());
  console.log(await cardTitles.nth(0).textContent());

  const allTitles = await cardTitles.allTextContents()
  console.log(allTitles)
})

// season 4
test.only("UI controls", async ({ page }) => {
  const userName = page.locator("#username");
  const signinBtn = page.locator("#signInBtn");
  const dropdown = page.locator("select.form-control")
  // const cardTitles = page.locator(".card-body .card-title a")

  await page.goto("https://rahulshettyacademy.com/loginpagePractise")

  // selects an option of a select
  await dropdown.selectOption("consult")
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click()

  // test the radio is checked or not
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  // OR
  await page.locator(".radiotextsty").last().isChecked();

  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  await page.locator("#terms").uncheck();
  expect(await page.locator("#terms").isChecked()).toBeFalsy();

  // pauses the browser page
  // await page.pause()
})