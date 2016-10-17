import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 *ngFor="let currentTask of tasks">{{ currentTask.description }}</h3>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Create to do list app.", 0),
    new Task("Learn Kung Fu.", 1),
    new Task("Rewatch all the Lord of the Rings movies.", 2),
    new Task("Do the laundry.", 3)
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
