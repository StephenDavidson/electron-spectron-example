require('./hooks');

describe('Sample Test', function () {
    this.timeout(10000);

    it('opens a window', function () {
        return this.app.client.waitUntilWindowLoaded()
            .getWindowCount().should.eventually.equal(1)
    });

    it('should get a url', function() {
        return this.app.client.url('https://duckduckgo.com')
            .getTitle()
            .should.eventually.equal('DuckDuckGo')
    });

    it('should search', function() {
        var input = 'this is a test';
        return this.app.client.url('https://duckduckgo.com')
            .setValue('#search_form_input_homepage', input)
            .getValue("#search_form_input_homepage")
            .should.eventually.equal(input)
            .click('#search_button_homepage')
            .element('.result__a')
            .should.eventually.exist
    });

});