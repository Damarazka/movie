import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'movie',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      //launchAutoHide: true,
      backgroundColor: "#ffffff",
      //androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "small",
      splashFullScreen: true,
      splashImmersive: true,
      iosSpinnerStyle: "small",
    }
  }
};

export default config;
