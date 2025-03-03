# Cryptocurrency Document

## Overview

This project uses [Docusaurus](https://docusaurus.io/), a modern static website generator, to create and manage our documentation site.

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

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone git@github.com:nehakolambe/crypto-dashboard.git
```

## Installation

To run this project, you will need Node.js and npm installed on your computer. After cloning the repository, you can follow these steps:

1. To got docs folder

   ```bash
   cd docs
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server

   ```bash
   npm run start
   ```

The application will be available at [http://localhost:3000/docs](http://localhost:3000/docs).
