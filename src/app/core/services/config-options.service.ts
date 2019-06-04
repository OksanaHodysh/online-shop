import { Injectable } from '@angular/core';

export interface CustomConfig {
  id: number;
  login: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class ConfigOptionsService {
  private config: CustomConfig = {
    id: 1,
    login: 'test01',
    email: 'test@gmail.ru',
    password: 'test_01'
  };

  getConfig(): CustomConfig {
    return this.config;
  }

  setConfig(configUpdate: Partial<CustomConfig>): void {
    this.config = {
      ...this.config,
      ...configUpdate
    };
  }
}
