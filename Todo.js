const inputBox = document.getElementById("input-box");
const listcotainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcotainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // ❌ cross button
    li.appendChild(span);
  }
  inputBox.value = "";
}

/* CLICK EVENT */
listcotainer.addEventListener("click", function(e) {

  // ✅ Task complete (optional)
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }

  // ✅ DELETE TASK
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }

});




