import { Component } from '@angular/core';

import { ShakePage } from '../shake/shake';
import { OptionsPage } from '../options/options';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  shakePage = ShakePage;
  optionsPage = OptionsPage;
  settingPage = SettingsPage;

  constructor() {

  }
}
