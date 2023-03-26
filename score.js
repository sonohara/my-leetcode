const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://leetcode.com/sonohara/');
  await page.locator('div.shadow-level3', {has: page.locator('text=Solved Problems')}).screenshot({ path: `score.png` });
  await browser.close();
})();
