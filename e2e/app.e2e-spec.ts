import { KitePage } from './app.po';

describe('kite App', () => {
  let page: KitePage;

  beforeEach(() => {
    page = new KitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
