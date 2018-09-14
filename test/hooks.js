const Application = require('spectron').Application;
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const electron = require('electron');

global.before(() => {
    chai.should();
    chai.use(chaiAsPromised);
});

module.exports = {
  startApp() {
    const app = new Application({
        path: electron,
        args: ['electron-app']
    });

    return app.start().then((app) => {
      chaiAsPromised.transferPromiseness = app.transferPromiseness;
      return app
    })
  },

  stopApp(app) {
    if (app && app.isRunning()) {
      return app.stop()
    }
  }
};
