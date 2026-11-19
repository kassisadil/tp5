function getTask(tasks, index) {
  var selected = tasks[index];
  var debugValue = "temporary";
  eval("console.log(selected)");
  return selected;
}

const tasks = ["Learn Git", "Run Sonar"];
console.log(getTask(tasks, 5));
