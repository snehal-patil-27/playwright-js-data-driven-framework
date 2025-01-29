# playwright-js-data-driven-framework
A Playwright automation framework using JavaScript, designed with a Page Object Model (POM) for maintainability and data-driven testing for enhanced test coverage. This repository demonstrates scalable test automation with reusable components and structured test data handling.

## Installation

To set up the Playwright project on your local machine, follow these steps:

### Prerequisites
1. **Node.js**: 
Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/). 
To check if Node.js is installed, run >>
     ```bash
     node -v
     ```

3. **npm**: 
npm (Node Package Manager) comes with Node.js. 
Check if npm is installed by running >>
     ```bash
     npm -v
     ```


### Step-by-Step Installation
1. **Clone the Repository**: 
Clone this repository to your local machine using Git.
Open your terminal and run >> 
     ```bash
     git clone https://github.com/snehal-patil-27/playwright-js-data-driven-framework/
     ```

3. **Navigate to the Project Directory**:
Open project directory 

4. **Install Dependencies**:
Install the project dependencies using npm >>
     ```bash
     npm install
     ```

6. **Create a .env File for Sensitive Data**:
To securely store your credentials, create a .env file at the root of your project.
This file will contain environment-specific variables that you can easily reference in your code.

    #### Steps:
    1. At the root level of your project, create a `.env` file.
    2. Add the following variables for storing login credentials:
    
        ```bash
        EMAIL="your-email@example.com"
        PASSWORD="your-secure-password"
        ```

### Running Test
1. **Open Playwright**:
Open the Playwright UI mode >> npx playwright test --ui

3. **Run tests**:
Click on spec.js or tests file to start the tests
