import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  testJson = "../../assets/test.json"

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getCountries() {
    return new Promise((resolve, reject) => {
      this.http.get(this.testJson).subscribe((res: any) => { resolve(res.countriesList) })
    });
  }
}
