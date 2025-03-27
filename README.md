# Jusbrasil Lawsuit Scraper

A web scraper for extracting active lawsuits from Jusbrasil, deployed on Vercel.

## Features

- Scrapes active lawsuits from Jusbrasil
- Authenticates with your Jusbrasil credentials
- Returns lawsuit data in JSON format
- Configurable number of lawsuits to scrape

## Deployment on Vercel

### Prerequisites

1. A Vercel account
2. Jusbrasil account credentials

### Environment Variables

Set the following environment variables in your Vercel project:

- `JUSBRASIL_USERNAME`: Your Jusbrasil email/username
- `JUSBRASIL_PASSWORD`: Your Jusbrasil password
- `MAX_LAWSUITS`: Maximum number of lawsuits to scrape (default: 123)

### Deploy to Vercel

1. Push this repository to GitHub
2. Import the repository in Vercel
3. Configure the environment variables
4. Deploy

## Usage

### API Endpoints

#### GET /api/scrape

Triggers the scraper and returns the results.

Query parameters:
- `limit` (optional): Maximum number of lawsuits to scrape

Example:

# jusbrasilRM
