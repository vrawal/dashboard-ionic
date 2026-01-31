import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.dashboard',
  appName: 'dashboard-ionic',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
