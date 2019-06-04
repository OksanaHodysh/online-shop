import { InjectionToken } from '@angular/core';

export interface AppConfig {
  appName: string;
  appVersion: string;
}

export const APP_CONFIG = {
  appName: 'Online Shopping App',
  appVersion: '1.0'
};

export const APP_CONSTANTS = new InjectionToken<AppConfig>('AppConstants');
