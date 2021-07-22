let carla = {
  name: "Carla",
  gender: "Female",
  married: true
}

let paul = {
  name: "Paul",
  gender: "Male",
  married: false
}

let james = {
  name: "James",
  gender: "Male",
  married: true
}

let people = [carla, paul, james];
let container = document.querySelector("#container");
let table = document.createElement("table");

const buildHeaders = obj => {
  let thead = document.createElement("thead");
  let tr = document.createElement("tr")
  table.appendChild(thead);
  thead.appendChild(tr);
  for (let key in obj) {
    let th = document.createElement("th");
    th.textContent = key;
    tr.appendChild(th);
  }
}

const buildBody = obj => {
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let i = 0; i < obj.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
      for (let key in obj[i]) {
        let td = document.createElement("td");
        let p = document.createElement("p");
        p.textContent = people[i][key];
        td.appendChild(p);
        tr.appendChild(td);
      }
  }
}

const buildTable = () => {
  container.appendChild(table);
  buildHeaders(people[0]);
  buildBody(people);
}

buildTable();