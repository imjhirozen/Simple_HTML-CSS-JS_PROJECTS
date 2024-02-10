const submitButton = document.getElementById("submitBtn");

submitButton.onclick = function() {
  let fullName = document.getElementById("fullName").value;
  if(fullName.trim() !== "") {
    create(fullName);
    fullName = document.getElementById("fullName").textContent = "";
    console.log(fullName);    
  } else {
    window.alert("Enter Full Name");
  }
}

function create(fullname){
  const container = document.createElement("div");
  container.classList.add("container");

  const name = document.createElement("p");
  name.textContent = fullname;
  name.id = "name";
  
  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";

  container.appendChild(name);
  container.appendChild(editBtn);
  container.appendChild(deleteBtn);
  document.getElementById("grid-Container").prepend(container);

  // Attach event listeners to the newly created buttons
  editBtn.addEventListener("click", () => edit(fullname, container));
  deleteBtn.addEventListener("click", () => deleteEntry(container));
}

function edit(fullname, container) {
  const newName = prompt("Enter new full name:", fullname);
  if (newName !== null && newName.trim() !== "") {
    container.querySelector("p").textContent = newName;
  }
}

function deleteEntry(container) {
  container.remove();
}


function random() {
  const names = [ "Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan", "Albert", "Walker", "Randy", "Reed", "Larry","Barnes",
                  "Lois","Wilson","Jesse","Campbell","Ernest","Rogers","Theresa","Patterson","Henry","Simmons",
                  "Michelle","Perry","Frank","Butler","Shirley" ];

  for(let i = 0; i < names.length; i++){
    setTimeout(()=>{
      create(names[i]);
    }, 500 * (i + 1));
  }
}