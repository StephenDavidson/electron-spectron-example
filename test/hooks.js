const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const electron = require('electron');

global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

module.exports = {
  async startApp() {
    const app = await new Application({
      path: electron,
      args: ['electron-app']
    }).start();
    chaiAsPromised.transferPromiseness = app.transferPromiseness;
    return app;
  },

  async stopApp(app) {
    if (app && app.isRunning()) {
      await app.stop();
    }
  }
};
