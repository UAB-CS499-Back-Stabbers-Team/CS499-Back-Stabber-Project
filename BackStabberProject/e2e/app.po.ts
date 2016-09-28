import { browser, element, by } from 'protractor/globals';

export class BackStabberProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bsp--root h1')).getText();
  }
}
