import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { Todo } from '../../models/Todo';
import { TodosProvider } from '../../providers/todos/todos';
import { FormPage } from '../form/form';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class List {
  todos: Todo[] = [];

  constructor(public modalCtrl: ModalController, private todosService: TodosProvider) {}

  async ionViewDidLoad() {
    await this.reload();
  }

  async reload() {
    try {
      this.todos = await this.todosService.all();
    } catch(e) {
      console.error(e);
      this.todos = [];
    }
  }

  async edit(todo: Todo) {
    const modal = await this.modalCtrl.create(FormPage, { todo });
    modal.present();
    modal.onDidDismiss(async (todo: Todo) => {
      if (!todo) return;
      await this.todosService.update(todo._id, todo);
      await this.reload();
    });
  }

  async add() {
    const modal = await this.modalCtrl.create(FormPage);
    modal.present();
    modal.onDidDismiss(async (todo: Todo) => {
      if (!todo) return;
      await this.todosService.create(todo);
      await this.reload();
    });
  }

}
