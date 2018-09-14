const hooks = require('./hooks');
const config = require('../config').get(process.env.NODE_ENV);
const SearchPage = require('./page-objects/search.page');

describe('Sample Test', () => {
  let app;

  beforeEach(async () => {
    app = await hooks.startApp();
  });

  afterEach(async() => {
    await hooks.stopApp(app);
  });

  it('opens a window', async() => {
    await app.client.waitUntilWindowLoaded()
      .getWindowCount()
      .should.eventually.equal(1);
  });

  it('should get a url', async() => {
    await app.client.url(config.url)
      .getTitle()
      .should.eventually.include('DuckDuckGo');
  });

  it('should search', async() => {
    const input = 'this is a test';
    await app.client.url(config.url)
      .setValue(SearchPage.searchField, input)
      .getValue(SearchPage.searchField)
      .should.eventually.equal(input)
      .click(SearchPage.searchButton)
      .element(SearchPage.searchResult)
      .should.eventually.exist;
  });

});
