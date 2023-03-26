const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://leetcode.com/sonohara/');
  await page.locator('div.shadow-level3', {has: page.locator('text=Solved Problems')}).screenshot({ path: `score.png` });
  await browser.close();
})();
