import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, 
  AdMobFreeBannerConfig, 
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from '@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public admobFree: AdMobFree) {

  }

  showBannerAd(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: 'ca-app-pub-3940256099942544/6300978111',
      overlap: true,
      isTesting: true,
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         console.log('deu certo?!?!!')
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       }).catch(e => console.log(e));
  }
  
  hideBannerAd(){
    this.admobFree.banner.hide();
  }
 
  showInterstitialAd() {

    let interstitialConfig: AdMobFreeInterstitialConfig = {
      isTesting: true,
      autoShow: true,
      id: 'ca-app-pub-3940256099942544/1033173712'
    };

    this.admobFree.interstitial.config(interstitialConfig);

    this.admobFree.interstitial.prepare().then((q) => {
      console.log('deu certo?!!')
    }).catch(e => console.log(e));

  }
 
  rewardVideoAd(){
    let rewardVideoConfig: AdMobFreeRewardVideoConfig = {
      isTesting: true,
      autoShow: true,
      id: 'ca-app-pub-3940256099942544/5224354917'
    };

    this.admobFree.rewardVideo.config(rewardVideoConfig);

    this.admobFree.rewardVideo.prepare().then((q) => {
      console.log('deu certo?!!')
    }).catch(e => console.log(e));

  }
}


