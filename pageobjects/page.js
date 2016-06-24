function Page () {
}

Page.prototype.open = function (path) {
    app.client.url(path)
};

module.exports = new Page();
