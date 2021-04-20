import { sizeOfElementsToBe } from '../../src';

const selector = 'button';
const defaultWidth = 147;
const defaultHeight = 46;

describe('sizeOfElementsToBe', () => {
  beforeEach(async () => await browser.url('/add_remove_elements/'));

  it('should verify that method returns true when size of element to be', async () => {
    await browser.execute('document.querySelector("button").style.height = "300px"');

    expect(await sizeOfElementsToBe(selector, { width: defaultWidth, height: 300 })()).toBe(true);
  });

  it('should verify that method returns true when size of element to be', async () => {
    await browser.execute('document.querySelector("button").style.width = "200px"');

    expect(await sizeOfElementsToBe(selector, { width: 200, height: defaultHeight })()).toBe(true);
  });

  it('should verify that method returns false when size of element not to be', async () => {
    expect(await sizeOfElementsToBe(selector, { width: 200, height: defaultHeight })()).toBe(false);
  });

  it('should verify that method returns false when size of element not to be', async () => {
    expect(await sizeOfElementsToBe(selector, { width: defaultWidth, height: 100 })()).toBe(false);
  });
});
