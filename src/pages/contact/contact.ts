import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseUI';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage extends BaseUI {

  isLogin = false;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public storage: Storage) {
    super();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('userName').then((val) => {
      if (val === 'admin') {
        // const loading = super.showLoading(this.loadingCtrl, '加载中...');
        this.isLogin = true;
        // loading.dismiss();
      }
    });
  }

  openLoginModal() {
    const loginModal = this.modalCtrl.create(LoginPage);
    // 解决 isLogin更新  页面不刷新的问题
    loginModal.onDidDismiss(() => {
      this.loadUserPage();
    })
    loginModal.present();
  }

}
