import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPipe } from '../../pipes/search/search';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  // countriesList = ['russia', 'thai', 'china', 'japan', 'poland', 'france']
  countriesList: any = []
  countries: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private _api: ApiProvider) {
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
    this.countriesList = await this._api.getCountries()
    console.log(this.countriesList)
    this.InitializeCountries();
  }

  onInput(searchbar) {
    this.InitializeCountries();
    const keyword = searchbar.srcElement.value;
    if (!keyword) return;
    this.countries = this.countries.filter((element) => element.country.includes(keyword))
  }

  private InitializeCountries() {
    this.countries = this.countriesList;
  }

  onCancel(data) {
    // console.log(data)
  }

  onPrepareSaveData(checkbox, c) {
    console.log(checkbox.value, c)
  }

}
