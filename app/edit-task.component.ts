import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
  <div *ngIf="childSelectedTask">
    <h1>Edit Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="childSelectedTask.description">
    </div>
    <div>
      <label>Enter Task Category:</label>
      <input [(ngModel)]="childSelectedTask.category">
    </div>
    <div>
      <label>Enter Task Priority:</label>
      <select [(ngModel)]="childSelectedTask.priority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="childSelectedTask.id">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
