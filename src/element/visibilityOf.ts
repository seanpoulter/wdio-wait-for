/**
 * A condition for checking the element to be visible
 *
 * @example
 * browser.waitUntil(visibilityOf('.header'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 *
 * @returns {!function} An expected condition that returns a promise
 *     representing whether the element is visible.
 */

export function visibilityOf(selectorOrElement: string | Promise<WebdriverIO.Element>): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    try {
      const element = typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;
      const isVisible = await element.isDisplayed();

      return isVisible;
    } catch {
      return false;
    }
  };
}
