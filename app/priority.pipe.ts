import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './task.model';

@Pipe({
  name: "priority",
  pure: false
})
export class PriorityPipe implements PipeTransform {
  transform(input: Task[], desiredPriority) {
    var output: Task[] = [];
    if (desiredPriority === "Low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "Low") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "Normal") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "Normal") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPriority === "High") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].priority === "High") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
