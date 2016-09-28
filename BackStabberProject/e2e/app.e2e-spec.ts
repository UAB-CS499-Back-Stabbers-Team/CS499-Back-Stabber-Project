import { BackStabberProjectPage } from './app.po';

describe('back-stabber-project App', function() {
  let page: BackStabberProjectPage;

  beforeEach(() => {
    page = new BackStabberProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bsp- works!');
  });
});
