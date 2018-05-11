import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SettingsPage } from '../pages/settings/settings';
import { OptionsPage } from '../pages/options/options';
import { ShakePage } from '../pages/shake/shake';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShakePage,
    OptionsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    PipesModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShakePage,
    OptionsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    HttpModule,
    HttpClientModule
  ]
})
export class AppModule { }
