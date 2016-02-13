import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {enableProdMode} from 'angular2/core';

if(!ENV_IS_DEV) enableProdMode();
bootstrap(AppComponent);
