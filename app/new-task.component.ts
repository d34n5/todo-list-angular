import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input #newDescription>
    </div>

    <div>
      <label>Enter Task Priority:</label>
      <select #newPriority>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

    <div>
      <label>Enter Task Category:</label>
      <select #newCategory>
        <option value="Work">Work</option>
        <option value="Home">Home</option>
        <option value="Hobby">Hobby</option>
      </select>
    </div>

    <div>
      <label>Enter Task ID:</label>
      <input #newId>
      <button (click)="
        addClicked(newDescription.value, newId.value, newPriority.value, newCategory.value);
        newDescription.value='';
        newId.value='';
        newPriority.value='';
        newCategory.value='';
      ">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number, priority: string, category: string) {
    var newTaskToAdd: Task = new Task(description, id, priority, category);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
