# Cryptocurrency Dashboard

## Overview

This project is a React application that displays real-time cryptocurrency prices using the CoinGecko API. It features a responsive design and offers a simple, yet powerful, user interface to search and view cryptocurrency data. It utilizes `@tanstack/react-query` for efficient data fetching and state management.

## Features

- **Real-time cryptocurrency prices** from CoinGecko API.
- **Search functionality** to quickly find specific cryptocurrencies.
- **Responsive design** for optimal viewing on various devices.

### Clone the Repository

First, clone the repository to your local machine:

```
git clone git@github.com:nehakolambe/crypto-dashboard.git
```

## Installation

To run this project, you will need Node.js and npm installed on your computer. After cloning the repository, you can follow these steps:

1. To got web-app folder

   ```
   cd web-app
   ```
2. Install dependencies:

   ```
   npm install
   ```
3. Start the development server

   ```
   npm run dev
   ```

The application will be available at [http://localhost:3000/dahhboard](http://localhost:3000/dahhboard).

## Technology Stack

* **React** : A JavaScript library for building user interfaces.
* **Axios** : A promise-based HTTP client for making API requests.
* **@tanstack/react-query** : A library for fetching, caching, and updating data in React applications.
* **Bootstrap** : A front-end framework for developing responsive and mobile-first websites.
* **Bootstrap Icons** : Provides icons as part of the Bootstrap framework.

## Project Structure

* `\_app.js`: Sets up the React Query client and provides it to the entire app.
* `dashboard.js`: Contains the main dashboard interface for displaying cryptocurrency prices.
* `globals.css`: Defines global CSS styles and responsive design setting
