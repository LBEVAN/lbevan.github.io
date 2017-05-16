import { Lbevan.Github.IoPage } from './app.po';

describe('lbevan.github.io App', () => {
  let page: Lbevan.Github.IoPage;

  beforeEach(() => {
    page = new Lbevan.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
