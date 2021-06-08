import puppeteer from "puppeteer";

const startBrowser = async () => {
  let browser = null;

  try {
    console.log("browser is starting..");
    browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    console.log("broswer started successfully!");
  } catch (err) {
    console.log(`Browser could not load because of ${err}`);
  }
};

export default startBrowser;
