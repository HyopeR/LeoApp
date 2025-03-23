import { app, BrowserWindow } from 'electron';
import { isDev } from './utils.js';
import * as path from 'node:path';

app.on('ready', () => {
  const window = new BrowserWindow({});
  if (isDev()) {
    window.loadURL('http://localhost:5001');
  } else {
    window.loadFile(path.join(app.getAppPath(), '/dist-web/index.html'));
  }
});
