import { app, BrowserWindow } from 'electron';
import * as path from 'node:path';
import { isDev } from '@app/utils.js';
import { ResourceModule } from '@app/services/index.js';

app.on('ready', () => {
  const window = new BrowserWindow({});

  if (isDev()) {
    window.loadURL('http://localhost:5001');
  } else {
    window.loadFile(path.join(app.getAppPath(), '/dist-web/index.html'));
  }

  ResourceModule.start();
});
