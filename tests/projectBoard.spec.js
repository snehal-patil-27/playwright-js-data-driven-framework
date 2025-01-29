// @ts-check
import { test } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { projectsPage } from '../pageObjects/projectsPage';
import fs from 'fs';

// Before each test, perform the login process
test.beforeEach('Login Page' , async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.login();
});

// Define test suite for Project Board Tests
test.describe('Project Board Tests', async () => {
 
    // Read and parse the JSON test data file
    const rawData = fs.readFileSync('./data/testData.json', 'utf8');
    const testData = JSON.parse(rawData);

    // Dynamically generate test cases based on the test data
    testData.forEach((testCase) => {
        test(testCase.testCaseName, async ({ page }) => {
            const projects = new projectsPage(page);
    
            // Click on the tab only if `tabName` exists
            if (testCase.tabName) {
                await projects.selectTab(testCase.tabName);
            }
    
            // Verify that the task exists in the specified column with the expected tags
            await projects.verifyTaskExists(testCase.columnName, testCase.taskName, testCase.expectedTags);
        });
    });
});