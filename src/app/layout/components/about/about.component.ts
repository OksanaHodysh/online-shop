import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import {
  APP_CONSTANTS,
  AppConfig,
  ConfigOptionsService,
  LocalStorageService,
  RANDOM_STRING
} from '../../../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  private TOKEN_KEY = 'access_token';

  constructor(
    @Inject(RANDOM_STRING) private randomString: any[],
    @Inject(APP_CONSTANTS) private config: AppConfig,
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService
  ) { }

  ngOnInit() {
    console.log(this.randomString);
    console.log(`You are using ${this.config.appName} application. Current version is ${this.config.appVersion}`);
    if (!this.localStorageService.getItem(this.TOKEN_KEY)) {
      this.localStorageService.setItem(this.TOKEN_KEY, 'testToken');
      console.log('Your session token is successfully stored in localStorage.');
    }
    console.log(this.configOptionsService.getConfig());
    this.configOptionsService.setConfig(
      {
        login: 'test02',
        password: 'test_02'
      }
    );
    console.log(this.configOptionsService.getConfig());
  }

  ngOnDestroy() {
    if (!this.localStorageService.getItem(this.TOKEN_KEY)) {
      this.localStorageService.removeItem(this.TOKEN_KEY);
      console.log('Your session token is successfully removed from localStorage.');
    }
  }
}
