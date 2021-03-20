import { startApp, stopApp } from './hooks';
import { homePage } from './page-objects/home.page';

describe('Sample Test', () => {
  let app;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async() => {
    await stopApp(app);
  });

  it('opens a window', async() => {
    (await app.client.getWindowCount()).should.equal(1);
  });


  it('should fill in input', async() => {
    const input = 'this is a test';
    const inputEl = await app.client.$(homePage.inputField)
    await inputEl.setValue(input)
    const inputValue = await inputEl.getValue();
    inputValue.should.equal(input)
  });
});
