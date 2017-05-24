import { RPage } from './app.po';

describe('r App', () => {
  let page: RPage;

  beforeEach(() => {
    page = new RPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
