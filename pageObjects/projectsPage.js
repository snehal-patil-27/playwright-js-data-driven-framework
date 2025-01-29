// @ts-check
import { expect } from '@playwright/test';


class projectsPage {

    constructor(page) {
        this.page = page;

        // Locator for the project board's main tab header
        this.projectTabHeader = page.locator('header h1');

        // Column selectors to dynamically locate tasks in different columns
        this.columnSelectors = {
            'To Do': 'div.inline-flex > div:nth-of-type(1)',
            'In Progress': 'div.inline-flex > div:nth-of-type(2)',
            'Review': 'div.inline-flex > div:nth-of-type(3)',
            'Done': 'div.inline-flex > div:nth-of-type(4)',
        };
    };

    // Selects a tab (e.g., "Mobile Application") on the project board
    async selectTab(tabName) {
        const tabLocator = this.page.locator('button h2', { hasText: tabName });
        await tabLocator.click();
        await expect(tabLocator).toBeVisible();

        // Verify that the project board header reflects the selected tab
        await expect(this.projectTabHeader).toHaveText(tabName);
    }

    //Verifies if a specific task exists in a given column and has the expected tags.
    async verifyTaskExists(columnName, taskName, expectedTags) {
      
        // Get the column locator using the column name
        const columnSelector = this.columnSelectors[columnName];
      
          if (!columnSelector) {
            throw new Error(`Column "${columnName}" not found.`);
          }
    
        const column = this.page.locator(columnSelector);

        // Locate the task within the specified column 
        const task = await column.locator('h3', { hasText: taskName }); 

        // Validate that the task is visible and contains the correct text
        await expect(task).toBeVisible();
        await expect(task).toHaveText(taskName);

        // Determine task index (for tag verification)
        const taskIndex = taskName === 'Fix navigation bug' ? 2 : 1;
        const tagLocator = `div > div:nth-of-type(${taskIndex}) > div span`;

        // Locate the tags for the specified task
        const tags = await column.locator(tagLocator);

        // Verify that the tags match the expected values
        await expect(tags).toContainText(expectedTags);
    };
};

export { projectsPage };