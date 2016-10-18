import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Task[], desiredCategory) {
    var output: Task[] = [];

    if (desiredCategory === "Work") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Work") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Home") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Home") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCategory === "Hobby") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Hobby") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
