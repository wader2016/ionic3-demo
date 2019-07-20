import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseUI';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI {

  userName: string;
  password: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage) {
    super();
  }

  login() {
    const loading = super.showLoading(this.loadingCtrl, '登录中...');
    if (this.userName === 'admin' && this.password === '1') {
      this.storage.set('userName', this.userName);
      loading.dismiss();
      this.dismiss();
    } else {
      loading.dismiss();
      super.showToast(this.toastCtrl, '用户名或密码错误');
    }
  }

  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


}
