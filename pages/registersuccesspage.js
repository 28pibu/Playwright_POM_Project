import { expect } from '@playwright/test';
exports.RegisterSuccessPage = class RegisterSuccessPage{
    constructor(page) {
        this.page = page
        // use PARTIAL text to avoid &nbsp; issues
        this.success_para = page.locator('b', { hasText: 'Dear' });
    }
    async RegisterionSuccess(expectedText) {
        await expect(this.success_para).toHaveText(expectedText);
    }
}