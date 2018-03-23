import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { List } from './list';
import { TodosProvider } from '../../providers/todos/todos';

@NgModule({
  declarations: [
    List
  ],
  imports: [
    IonicPageModule.forChild(List),
  ],
  providers: [
    TodosProvider
  ]
})
export class ListModule {}
