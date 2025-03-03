# Cryptocurrency Dashboard

## Overview

This project is a React application that displays real-time cryptocurrency prices using the CoinGecko API. It features a responsive design and offers a simple, yet powerful, user interface to search and view cryptocurrency data. It utilizes `@tanstack/react-query` for efficient data fetching and state management.

## Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project requires Node.js version 14 or newer.

### For Windows:

1. **Install Node.js and npm:**

   - Download the Node.js installer from the official [Node.js website](https://nodejs.org/).
   - Run the downloaded `.exe` file to start the installation. Follow the installation prompts, ensuring that you check the box to 'Add Node.js to PATH' during installation. This step makes sure that Node.js and npm are accessible from the command line.
2. **Verify the installation:**

   - Open Command Prompt and type the following commands to check that Node.js and npm are properly installed:
     ```cmd
     node -v
     npm -v
     ```
   - These commands should display the versions of Node.js and npm installed on your system, confirming that they are accessible via your command line.

### For macOS:

1. **Install Node.js and npm:**

   - You can install Node.js and npm via Homebrew. If you don't have Homebrew installed, first install it by running the following command in your terminal:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
   - Once Homebrew is installed, install Node.js (which includes npm) by running:
     ```bash
     brew install node
     ```
2. **Verify the installation:**

   - Open Terminal and type the following commands to check that Node.js and npm are properly installed:
     ```bash
     node -v
     npm -v
     ```
   - These commands should display the versions of Node.js and npm installed on your system, confirming that they are accessible via your terminal.

## Features

- **Real-time cryptocurrency prices** from CoinGecko API.
- **Search functionality** to quickly find specific cryptocurrencies.
- **Responsive design** for optimal viewing on various devices.

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:nehakolambe/crypto-dashboard.git
```

## Installation

To run this project, you will need Node.js and npm installed on your computer. After cloning the repository, you can follow these steps:

1. To got web-app folder

   ```bash
   cd web-app
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
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
