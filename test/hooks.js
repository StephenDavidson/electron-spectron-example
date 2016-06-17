var Application = require('spectron').Application;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var electron = require('electron-prebuilt');

global.before(function () {
    chai.should()
    chai.use(chaiAsPromised)
});

beforeEach(function () {
    this.app = new Application({
        path: electron,
        args: ['electron-app']
    });
    return this.app.start()
});

beforeEach(function () {
    chaiAsPromised.transferPromiseness = this.app.transferPromiseness
});

afterEach(function () {
    if (this.app && this.app.isRunning()) {
        return this.app.stop()
    }
});