/**
 * A condition for checking an element contains a specific text
 *
 * @example
 * browser.waitUntil(textToBePresentInElement('.home', 'Home'));
 *
 * @param {!string | WebdriverIO.Element} selectorOrElement The selector or element to check
 * @param {!string} expectedText The expected text to verify
 *
 * @returns {!function} A condition that returns a promise
 *     representing whether the element contains a specific text.
 */

export function textToBePresentInElement(
  selectorOrElement: string | Promise<WebdriverIO.Element>,
  expectedText: string,
): () => Promise<boolean> {
  return async (): Promise<boolean> => {
    const element = typeof selectorOrElement === 'string' ? await $(selectorOrElement) : await selectorOrElement;
    const text = await element.getText();

    return text.includes(expectedText);
  };
}
