import { Component, OnInit } from '@angular/core';
import { StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public keyword = '';
  public todoList: any[] = [];
  constructor(public storage: StorageService) {
  }

  ngOnInit() {
    const todoList  = this.storage.get('todoList');
    if (todoList) {
      this.todoList = todoList;
    }
  }
  addList() {
    if (!this.todoListHasKeyword(this.todoList, this.keyword) && this.keyword !== '') {
      this.todoList.push({
        title : this.keyword,
        status: false
      });
      this.keyword = '';
      this.storage.set('todoList', this.todoList);
    } else {
      alert('输入重复或为空');
    }
  }
  delItem(key) {
    this.todoList.splice(key, 1);
    this.storage.set('todoList', this.todoList);
  }
  todoListHasKeyword(todoList, keyword) {
    for (let i = 0; i < todoList.length ; i++) {
      if (todoList[i].title === keyword) {
        return true;
      }
    }
    return false;
  }
}
