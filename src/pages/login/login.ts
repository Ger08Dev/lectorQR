import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../model/user';
import { RegistrarPage } from '../registrar/registrar';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login(user: User){
    try{
      console.log(user.email);
      console.log(user.password);

      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      console.log(result);
      this.navCtrl.push(HomePage, {}, {animate: false});
      
    }
    catch(e)
    {
      console.error(e);
    }

    
  }
  
  register(){
    this.navCtrl.push(RegistrarPage, {}, {animate: false});    
  }

 
}
