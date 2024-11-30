import { test, expect } from "@playwright/test"

// season 3
test("client app test", async ({ page }) => {
  const cardBodyTitle = page.locator(".card-body b");

  await page.goto("https://rahulshettyacademy.com/client")
  await page.locator("#userEmail").fill("pouriamesram@gmail.com");
  await page.locator("#userPassword").fill("Pouri@1383");
  await page.locator("[value='Login']").click();

  // wait untill the page request has been done
  //try not to use this
  await page.waitForLoadState('networkidle');
  //OR to use the bellow one
  await cardBodyTitle.last().waitFor()

  const titles = await cardBodyTitle.allTextContents();
  console.log(titles)

})


