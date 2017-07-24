import { CxboRedo1Page } from './app.po';

describe('cxbo-redo1 App', () => {
  let page: CxboRedo1Page;

  beforeEach(() => {
    page = new CxboRedo1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
