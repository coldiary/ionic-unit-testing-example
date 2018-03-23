import { browser, by, element } from 'protractor';

export class App {

  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getListTitleText() {
    return element(by.tagName('page-list')).element(by.tagName('ion-title')).element(by.css('.toolbar-title')).getText();
  }
}
