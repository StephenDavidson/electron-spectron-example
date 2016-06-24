var page = require('./page');

var searchPage = Object.create(page, {
    /**
     * define elements
     */
    searchField:  { get: function () { return app.client.elements('#search_form_input_homepage'); } },
    searchButton: { get: function () { return app.client.elements('#search_button_homepage'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'checkboxes');
    } }
});

module.exports = searchPage;