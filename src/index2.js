document.addEventListener("DOMContentLoaded", () => {
  // user should be able to type a task into the input field
  // user should click a submit button for the form
  // the task string provided should appear on the DOm after submit button activated
  const myForm = document.querySelector("form");
  console.log(myForm);
  const submitButton = myForm.querySelector("input[type='submit']");
  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const task = myForm.querySelector("input").value;

    let taskItem = document.createElement("li");
    taskItem.innerText = task;
    document.querySelector("ul").appendChild(taskItem);
  });

  // delete function to remove tasks from the list
  // priority values selected from a dropdown used to determine the color of the text in the list
  // sorting based on priority asc/desc
  // another input field for user/duration/date due
  // ability to edit tasks
});
