import { AegeanFirebasePage } from './app.po';

describe('aegean-firebase App', () => {
  let page: AegeanFirebasePage;

  beforeEach(() => {
    page = new AegeanFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
