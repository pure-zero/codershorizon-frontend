import { CodershorizonFrontendPage } from './app.po';

describe('codershorizon-frontend App', function() {
  let page: CodershorizonFrontendPage;

  beforeEach(() => {
    page = new CodershorizonFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
