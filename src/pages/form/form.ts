import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Todo } from '../../models/Todo';

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {
  todo: Todo;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.todo = { ...navParams.get('todo') } || new Todo();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.todo)
  }


}
