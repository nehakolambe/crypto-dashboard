# Cryptocurrency Dashboard and Documentation Site

## Overview

This repository hosts two main projects: the Cryptocurrency Dashboard and its accompanying Documentation Site. The dashboard displays real-time cryptocurrency prices using the CoinGecko API, while the documentation site, powered by Docusaurus, provides detailed documentation and guides for the dashboard.

### Cryptocurrency Dashboard

The Cryptocurrency Dashboard is a React application that offers a user-friendly interface to view and search for cryptocurrency prices in real-time. It utilizes efficient data fetching, caching, and state management with `@tanstack/react-query`.

### Documentation Site

The Documentation Site is built with Docusaurus, a modern static website generator that simplifies creating and maintaining project documentation.

## Features

### Dashboard

- **Real-time cryptocurrency prices** from CoinGecko API.
- **Search functionality** to quickly find specific cryptocurrencies.
- **Responsive design** for optimal viewing on various devices.

### Documentation Site

- **Comprehensive documentation** covering all aspects of the Cryptocurrency Dashboard.
- **Easy navigation** with structured pages and categories.

## Prerequisites

Both projects require [Node.js](https://nodejs.org/) (version 14 or newer) and npm. Make sure these are installed on your computer before proceeding.

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

## Installation

### Cryptocurrency Dashboard

1. Clone the repository:

   ```bash
   git clone git@github.com:nehakolambe/crypto-dashboard.git
   ```
2. To got web-app folder

   ```bash
   cd web-app
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the development server

   ```bash
   npm run dev
   ```

The application will be available at [http://localhost:3000/dahhboard](http://localhost:3000/dahhboard).

### Documentation Site

1. Navigate to the `docs` folder:

   ```bash
   cd docs
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm run start
   ```
   The documentation site will be available at `http://localhost:3000/docs`.
