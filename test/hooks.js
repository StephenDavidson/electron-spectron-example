var Application = require('spectron').Application;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var electron = require('electron-prebuilt');

global.before(function () {
    chai.should();
    chai.use(chaiAsPromised);
});

beforeEach(function () {
    this.timeout(10000);
    this.app = new Application({
        path: electron,
        args: ['electron-app']
    });

    return this.app.start().then(function (app) {
        chaiAsPromised.transferPromiseness = app.transferPromiseness;
        return app
    })
});

afterEach(function () {
    if (this.app && this.app.isRunning()) {
        return this.app.stop()
    }
});