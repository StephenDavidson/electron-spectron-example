const hooks = require('./hooks');

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
    await app.client.url('https://duckduckgo.com')
      .getTitle()
      .should.eventually.include('DuckDuckGo');
  });

  it('should search', async() => {
    const input = 'this is a test';
    await app.client.url('https://duckduckgo.com')
      .setValue('#search_form_input_homepage', input)
      .getValue('#search_form_input_homepage')
      .should.eventually.equal(input)
      .click('#search_button_homepage')
      .element('.result__a')
      .should.eventually.exist;
  });

});
