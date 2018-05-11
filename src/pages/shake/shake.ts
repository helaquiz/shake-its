import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-shake',
  templateUrl: 'shake.html',
})
export class ShakePage {

  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShakePage');
  }

}
