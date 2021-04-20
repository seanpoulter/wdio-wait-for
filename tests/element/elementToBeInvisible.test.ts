import { elementToBeInvisible } from '../../src';

const selector = '#elements button';

describe('elementToBeInvisible', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when element is invisible', async () => {
    expect(await elementToBeInvisible(selector)()).toBe(true);
  });

  it('should verify that method returns false when element is visible', async () => {
    const element = await $('button');
    await element.click();

    expect(await elementToBeInvisible(selector)()).toBe(false);
  });
});
