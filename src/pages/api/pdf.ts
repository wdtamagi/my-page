import chrome from 'chrome-aws-lambda';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

const isDev = process.env.NODE_ENV === 'development';
const url =
  process.env.VERCEL === '1'
    ? process.env.VERCEL_URL
    : isDev
    ? 'localhost:3000'
    : 'my-pdf-url';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const protocol = req.headers['x-forwarded-proto'] || 'http';

  const path = 'pdf';

  const browser = await puppeteer.launch(
    !isDev
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: true,
        }
      : {},
  );
  const page = await browser.newPage();
  await page.goto(`${protocol}://${url}/${path}`);
  const pdf = await page.pdf({
    displayHeaderFooter: false,
    format: 'Letter',
    landscape: false,
    margin: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    },
    preferCSSPageSize: true,
    printBackground: true,
    scale: 1,
  });
  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  return res.end(pdf);
};

export default handler;
