
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';


@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="changePriority($event.target.value)" class="filter">
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Normal">Normal</option>
      <option value="High">High</option>
    </select>
    <select (change)="changeCategory($event.target.value)" class="filter">
      <option value="All">All</option>
      <option value="Work">Work</option>
      <option value="Home">Home</option>
      <option value="Hobby">Hobby</option>
    </select>
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness | priority:selectedPriority | category:selectedCategory">
      <task-display [task]="currentTask"></task-display>
      <button (click)="editButtonHasBeenClicked(currentTask)">Edit</button>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }

  public selectedPriority: string = "All";
  changePriority(optionFromPriorityMenu) {
    this.selectedPriority = optionFromPriorityMenu;
    console.log("Priority " + this.selectedPriority);
  }

  public selectedCategory: string = "All";
  changeCategory(optionFromCategoryMenu) {
    this.selectedCategory = optionFromCategoryMenu;
  }
}
