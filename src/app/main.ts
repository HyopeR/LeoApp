import { app, BrowserWindow } from 'electron';
import { isDev } from './utils.ts';
import * as path from 'node:path';
import { ResourceManager } from './services/index.ts';

app.on('ready', () => {
  const window = new BrowserWindow({});
  const resourceManager = new ResourceManager();

  if (isDev()) {
    window.loadURL('http://localhost:5001');
  } else {
    window.loadFile(path.join(app.getAppPath(), '/dist-web/index.html'));
  }

  resourceManager.start();
});
