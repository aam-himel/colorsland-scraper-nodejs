import puppeteer from "puppeteer";
import logger from "./logger.js";

const startBrowser = async () => {
  let browser = null;

  try {
    logger("Browser is starting...");
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();

    await browser.close();

    logger("broswer started successfully!");
  } catch (err) {
    logger(`Browser could not load because of ${err}`);
  }
};

export default startBrowser;
