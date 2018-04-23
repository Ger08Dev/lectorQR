import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/User'
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  user = {} as User;

  constructor( private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: User){
    try{
      console.log(user.email);
      console.log(user.password);

      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch(e)
    {
      console.error(e);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
