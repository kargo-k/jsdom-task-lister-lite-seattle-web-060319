document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.querySelector("form");

  const submitButton = myForm.querySelector("input[type='submit']");

  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    const task = myForm.querySelector("input").value;
    let priorityLevel = document.getElementById("priority").selectedIndex;
    let taskItem = document.createElement("li");
    taskItem.innerText = task + " " + Date();
    taskItem.className = `p${priorityLevel}`;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", function(e) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });

    let editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.addEventListener("click", function(e) {
      document.querySelector(
        "input"
      ).value = e.target.parentNode.innerText.slice(0, -10);
      let level;
      const dropdown = document.getElementById("priority");
      if (e.target.parentNode.className === "p0") {
        dropdown.getElementsByTagName("option")[0].selected = true;
      } else if (e.target.parentNode.className === "p1") {
        dropdown.getElementsByTagName("option")[1].selected = true;
      } else if (e.target.parentNode.className === "p2") {
        dropdown.getElementsByTagName("option")[2].selected = true;
      } else {
        dropdown.getElementsByTagName("option")[3].selected = true;
      }
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });

    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    document.querySelector("ul").appendChild(taskItem);

    document.querySelector("input").value = "";
    document
      .getElementById("priority")
      .getElementsByTagName("option")[0].selected = true;
  });

  const sortButtons = document.querySelectorAll("button.sortButton");
  sortButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      const list = document.querySelector("ul");
      const p0s = document.querySelectorAll("li.p0");
      const p1s = document.querySelectorAll("li.p1");
      const p2s = document.querySelectorAll("li.p2");
      const p3s = document.querySelectorAll("li.p3");
      if (button.id === "asc") {
        // ascending list
        list.innerHTML = "";
        p0s.forEach(p0item => list.appendChild(p0item));
        p3s.forEach(p3item => list.appendChild(p3item));
        p2s.forEach(p2item => list.appendChild(p2item));
        p1s.forEach(p1item => list.appendChild(p1item));
      } else {
        // descending list
        list.innerHTML = "";
        p1s.forEach(p1item => list.appendChild(p1item));
        p2s.forEach(p2item => list.appendChild(p2item));
        p3s.forEach(p3item => list.appendChild(p3item));
        p0s.forEach(p0item => list.appendChild(p0item));
      }
    });
  });
});
