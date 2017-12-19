const hooks = require('./hooks');

describe('Sample Test', () => {
    let app;

    beforeEach(() => {
        return hooks.startApp().then((startedApp) => { app = startedApp });
    });

    afterEach(() => {
        return hooks.stopApp(app)
    });

    it('opens a window', () => {
        return app.client.waitUntilWindowLoaded()
            .getWindowCount().should.eventually.equal(1)
    });

    it('should get a url', () => {
        return app.client.url('https://duckduckgo.com')
            .getTitle()
            .should.eventually.equal('DuckDuckGo')
    });

    it('should search', () => {
        const input = 'this is a test';
        return app.client.url('https://duckduckgo.com')
            .setValue('#search_form_input_homepage', input)
            .getValue("#search_form_input_homepage")
            .should.eventually.equal(input)
            .click('#search_button_homepage')
            .element('.result__a')
            .should.eventually.exist
    });

});