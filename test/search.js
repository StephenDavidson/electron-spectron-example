import { startApp, stopApp } from './hooks';
import { searchPage } from './page-objects/search.page';
import * as Config from '../config'

describe('Sample Test', () => {
  const config = Config.get(process.env.NODE_ENV);
  let app;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async() => {
    await stopApp(app);
  });

  it('opens a window', async() => {
    app.client.waitUntilWindowLoaded()
    app.client.getWindowCount()
      .should.eventually.equal(1);
  });

  it('should get a url', async() => {
    app.client.url(config.url)
    app.client.getTitle()
      .should.eventually.include('DuckDuckGo');
  });

  it('should search', async() => {
    const input = 'this is a test';
    app.client.url(config.url)
    const inputEl = await (app.client.$(searchPage.searchField))
    inputEl.setValue(input)
    inputEl.getValue()
      .should.eventually.equal(input)
    const searchButton = await (app.client.$(searchPage.searchButton))
    searchButton.click()
    app.client.$(searchPage.searchResult)
      .should.eventually.exist;
  });

});
