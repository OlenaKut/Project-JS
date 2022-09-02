class Address {
  constructor(country, city, street, number) {
    (this.country = country),
      (this.city = city),
      (this.street = street),
      (this.number = number);
  }
}
class Citizen {
  constructor(firstname, lastname, age, registered, address) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.age = age),
      (this.registered = registered),
      (this.address = address);
  }
}

let main = document.createElement("main");
let header = document.getElementById("header");
header.insertBefore(main, header.children[1]);

let firstButton = document.createElement("button");
let textButton = document.createTextNode("Create");
firstButton.appendChild(textButton);
main.insertBefore(firstButton, main.children[0]);

firstButton.id = "button";
document.getElementById("button").addEventListener("click", createNewButton);

let stop = true;
function createNewButton() {
  let secondButton = document.createElement("button");
  let secondTextButton = document.createTextNode("Create citizen");

  let form = document.createElement("form");
  let paraName = document.createElement("p");
  let textParaName = document.createTextNode("Enter your firstname:");
  let inputName = document.createElement("input");

  let paraFname = document.createElement("p");
  let textParaFname = document.createTextNode("Enter your lastname:");
  let inputFname = document.createElement("input");

  let paraAge = document.createElement("p");
  let textParaAge = document.createTextNode("Enter your age:");
  let inputAge = document.createElement("input");

  if (stop) {
    secondButton.appendChild(secondTextButton);
    main.insertBefore(secondButton, main.children[1]);

    main.insertBefore(form, main.children[2]);

    paraName.appendChild(textParaName);
    form.insertBefore(paraName, form.children[0]);
    form.insertBefore(inputName, form.children[1]);

    paraFname.appendChild(textParaFname);
    form.insertBefore(paraFname, form.children[3]);
    form.insertBefore(inputFname, form.children[4]);

    paraAge.appendChild(textParaAge);
    form.insertBefore(paraAge, form.children[5]);
    form.insertBefore(inputAge, form.children[5]);

    stop = false;
  }
  secondButton.id = "buttonCreate";
  document
    .getElementById("buttonCreate")
    .addEventListener("click", createCitizen);

  inputName.id = "inputName";
  inputFname.id = "inputFname";
  inputAge.id = "inputAge";

  function createCitizen() {
    let citizen1 = new Citizen();
    citizen1.firstname = document.getElementById("inputName").value;
    citizen1.lastname = document.getElementById("inputFname").value;
    citizen1.age = document.getElementById("inputAge").value;
    alert(
      `Hello, ${citizen1.firstname} ${citizen1.lastname}, you are ${citizen1.age}`
    );
  }
}
