import { Injectable } from '@angular/core';

declare var liff: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  initLineLiff() {
    return new Promise((resolve, reject) => {
      liff.init({ liffId: "'1656331237-XGkQjqOl'" }, () => {
        resolve(liff.getProfile())
      }, err => {
        reject(err)
      })
      // liff.init(data => {
      //   console.log(data);
      //   resolve(liff.getProfile())
      // }, err => {
      //   reject(err)
      // })
    })
  }

  getLineProfile() {
    return new Promise((resolve, reject) => {
      liff.getProfile(data => {
        resolve(data)
      }, err => {
        reject(err)
      })
    })
  }
}
