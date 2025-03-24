import OsUtils from 'os-utils';
import { Mixin } from 'ts-mixer';
import { Singleton } from '@app/class/index.js';
import * as fs from 'node:fs';

class ResourceManager extends Mixin(Singleton) {
  public static INTERVAL = 500;

  start() {
    setInterval(async () => {
      const storageInfo = this.getStorageInfo();
      const storageUsage = storageInfo.usage;
      const cpuUsage = await this.getCpuUsage();
      const ramUsage = this.getRamUsage();
      console.log({
        storage: storageUsage,
        cpu: cpuUsage,
        ram: ramUsage,
      });
    }, ResourceManager.INTERVAL);
  }

  getStorageInfo() {
    const path = process.platform === 'win32' ? 'C://' : '/';
    const stat = fs.statfsSync(path);
    const total = stat.bsize * stat.blocks;
    const free = stat.bsize * stat.bfree;
    return {
      total: Math.floor(total / 1_000_000_000),
      usage: 1 - free / total,
    };
  }

  async getCpuUsage() {
    return new Promise((resolve) => OsUtils.cpuUsage(resolve));
  }

  getRamUsage() {
    return 1 - OsUtils.freememPercentage();
  }
}

export default ResourceManager;
