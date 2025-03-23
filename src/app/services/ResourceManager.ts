import OsUtils from 'os-utils';

class ResourceManager {
  public static INTERVAL = 500;

  start() {
    setInterval(() => {
      const cpuUsage = this.getCpuUsage();
      console.log(cpuUsage);
    }, ResourceManager.INTERVAL);
  }

  async getCpuUsage() {
    return new Promise((resolve) => {
      OsUtils.cpuUsage(resolve);
    });
  }
}

export default ResourceManager;
