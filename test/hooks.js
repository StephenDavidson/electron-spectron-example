import { Application } from 'spectron';
import { should } from 'chai';
import electron from 'electron';

global.before(() => {
  should();
});

export async function startApp() {
  const app = new Application({
    path: electron,
    args: ['electron-app']
  })
  return app.start();
}

export async function stopApp(app) {
  if (app && app.isRunning()) {
    await app.stop();
  }
}
