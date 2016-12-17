import { Angular2BandsPage } from './app.po';

describe('angular2-bands App', function() {
  let page: Angular2BandsPage;

  beforeEach(() => {
    page = new Angular2BandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
