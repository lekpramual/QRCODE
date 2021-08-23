import { Component, OnInit } from '@angular/core';

import { AppService } from "./app.service"

declare var liff: any;

// import liff from '@line/liff';

// type UnPromise<T> = T extends Promise<infer X> ? X : T;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ng-line-liff';
  messages: string;
  userProfile!: any ;

  // profile: UnPromise<ReturnType<typeof liff.getProfile>> | undefined;

  constructor(private appService: AppService) {
    this.messages = "";
    this.initLineLiff();
  }

  async ngOnInit() {
    await this.initLineLiff();
  }

  async initLineLiff() {
    // try {
    //   liff.init({ liffId: '1656331237-XGkQjqOl' }).then(() => {
    //     if (liff.isLoggedIn()) {
    //       liff.getProfile().then(profile => {
    //         this.profile = profile;
    //         // console.log(this.profile)
    //       }).catch(console.error);
    //     } else {
    //       // login line 
    //       // liff.login()
    //     }
    //   }).catch(console.error)
    // } catch (error) {
    //   console.error
    // }
    try {
      const data: any = await this.appService.initLineLiff();
      this.userProfile = await liff.getProfile();
      alert(`Hi ${this.userProfile.displayName}!`);
    } catch (err) {
      // alert(err)
    }
  }

  async sendMessages() {
    try {
      const successMsgs = await liff.sendMessages([
        {
          type: 'text',
          text: this.messages
        }
      ])
      liff.closeWindow()
    } catch (e) {
      alert(e)
    }

  }
}
