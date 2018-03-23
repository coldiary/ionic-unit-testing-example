import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { uniqueId } from 'lodash';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodosProvider {
  todos: Todo[] = [];

  async create({ text, checked }): Promise<Todo> {
    const new_todo: Todo = {
      _id: uniqueId('todo'),
      text,
      checked,
    };
    this.todos.push(new_todo);
    return new_todo;
  }

  async update(id: string, { text, checked }): Promise<Todo> {
    return this.set(id, { text, checked });
  }

  async all(): Promise<Todo[]> {
    return this.todos;
  }

  async get(id: string): Promise<Todo> {
    const todo = this.todos.find(todo => todo._id === id);
    if (!todo) throw Error('Todo not found');
    return todo;
  }

  async check(id: string): Promise<Todo> {
    return this.set(id, { checked: true });
  }

  async uncheck(id: string): Promise<Todo> {
    return this.set(id, { checked: false });
  }

  private async set(id: string, values: { text?: string, checked?: boolean }): Promise<Todo> {
    const todo = await this.get(id);
    const updated = { ...todo, ...values };
    const index = this.todos.findIndex(todo => todo._id === id);
    this.todos = Object.assign(this.todos, { [index]: updated })
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    if (!this.todos.some(todo => todo._id === id))
      throw Error('Todo not found');
    this.todos = this.todos.filter(todo => todo._id !== id);
    return true;
  }

}
