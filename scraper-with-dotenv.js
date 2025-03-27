import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The rest of the code is the same as scraper.js, but with this modification:
const config = {
  // Login credentials
  credentials: {
    username: process.env.JUSBRASIL_USERNAME || '',
    password: process.env.JUSBRASIL_PASSWORD || '',
  },
  // URLs
  urls: {
    login: 'https://login.jusbrasil.com.br/',
    lawsuits: 'https://escritorioonline.jusbrasil.com.br/processos?lawsuitType=LAWSUIT&limit=20&status=ACTIVE',
  },
  // Browser options
  browser: {
    headless: 'new', // Use headless mode in production
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1366,768',
    ],
  },
  // Output options
  output: {
    format: 'json', // 'json' or 'csv'
    path: path.join(__dirname, 'data'),
    filename: `lawsuits_${new Date().toISOString().split('T')[0]}.json`,
  },
  // Scraping options
  scraping: {
    maxLawsuits: parseInt(process.env.MAX_LAWSUITS || '123', 10),
    pageTimeout: 30000,
    navigationTimeout: 60000,
    waitBetweenPages: 2000,
  },
};

// ... rest of the code from scraper.js ...

