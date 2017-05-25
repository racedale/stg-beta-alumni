import { StgBetaAlumniPage } from './app.po';

describe('stg-beta-alumni App', () => {
  let page: StgBetaAlumniPage;

  beforeEach(() => {
    page = new StgBetaAlumniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
