import { test, expect } from "@playwright/test"

test("google first test", async ({ page }) => {
  await page.goto("https://google.com")
  // await expect(page.title)
  console.log(await page.title())
})
