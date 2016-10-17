
export class CompletenessPipe implements PipeTransform {
  transform(input: Task[], desiredCompleteness, word1, word2, word3, word4, word5, word6) {
    console.log(word1);
    console.log(word2);
    console.log(word3);
    console.log(word4);
    console.log(word5);
    console.log(word6);

    var output: Task[] = [];
    if(desiredCompleteness === "notDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "isDone") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
