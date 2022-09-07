let Address = class {
  constructor(country, city, street, number) {
    (this.country = country),
      (this.city = city),
      (this.street = street),
      (this.number = number);
  }
};
let Citizen = class {
  constructor(firstname, lastname, age, registered, address) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.age = age),
      (this.registered = registered),
      (this.address = address),
      function setAddress() {
        (this.address = Address), (this.registered = true);
      };
  }
};
//Create main, header

let main = document.createElement("main");
let header = document.getElementById("header");
header.insertBefore(main, header.children[1]);

//Create firstbutton
let firstButton = document.createElement("button");
let textButton = document.createTextNode("Create");
firstButton.appendChild(textButton);
main.insertBefore(firstButton, main.children[0]);

firstButton.id = "button";
document.getElementById("button").addEventListener("click", createNewButton);

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

let formTwo = document.createElement("form");
let paraCountry = document.createElement("p");
let textCountry = document.createTextNode("Enter your country:");
paraCountry.appendChild(textCountry);
let inputCountry = document.createElement("input");

let paraCity = document.createElement("p");
let textCity = document.createTextNode("Enter your city:");
paraCity.appendChild(textCity);
let inputCity = document.createElement("input");

let paraStreet = document.createElement("p");
let textStreet = document.createTextNode("Enter your street:");
paraStreet.appendChild(textStreet);
let inputStreet = document.createElement("input");

let paraNumber = document.createElement("p");
let textNumber = document.createTextNode("Enter the house number:");
paraNumber.appendChild(textNumber);
let inputNumber = document.createElement("input");

let registerButton = document.createElement("button");
let textRegisterButton = document.createTextNode("Register");
registerButton.append(textRegisterButton);

let stop = true;

function createNewButton() {
  if (stop) {
    secondButton.appendChild(secondTextButton);
    main.insertBefore(secondButton, main.children[2]);

    main.insertBefore(form, main.children[1]);

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
  form.id = "firstForm";
  form.className = "field";
  inputName.id = "inputName";
  inputName.className = "field";
  inputFname.id = "inputFname";
  inputFname.className = "field";
  inputAge.id = "inputAge";
  inputAge.className = "field";
}

let removeForm = false;
let citizen1 = new Citizen();
function createCitizen() {
  citizen1.firstname = document.getElementById("inputName").value;
  citizen1.lastname = document.getElementById("inputFname").value;
  citizen1.age = document.getElementById("inputAge").value;
  citizen1.registered = false;
  citizen1.address = address1;
  removeForm = true;
  alert(
    `Hello, ${citizen1.firstname} ${citizen1.lastname}, you are ${citizen1.age}`
  );
  setTimeout(() => form.remove());
  setTimeout(() => secondButton.remove());
  return newFunction();
}

function newFunction() {
  main.insertBefore(formTwo, main.children[2]);
  formTwo.insertBefore(paraCountry, formTwo.children[0]);
  formTwo.insertBefore(inputCountry, formTwo.children[1]);

  formTwo.insertBefore(paraCity, formTwo.children[2]);
  formTwo.insertBefore(inputCity, formTwo.children[3]);

  formTwo.insertBefore(paraStreet, formTwo.children[4]);
  formTwo.insertBefore(inputStreet, formTwo.children[5]);

  formTwo.insertBefore(paraNumber, formTwo.children[6]);
  formTwo.insertBefore(inputNumber, formTwo.children[7]);

  main.insertBefore(registerButton, main.children[8]);

  registerButton.id = "registerButton";
  document
    .getElementById("registerButton")
    .addEventListener("click", createAddress);

  formTwo.id = "formTwo";
  inputCountry.id = "inputCountry";
  inputCity.id = "inputCity";
  inputStreet.id = "inputStreet";
  inputNumber.id = "inputNumber";
}

let address1 = new Address();
let add = false;
function createAddress() {
  address1.country = document.getElementById("inputCountry").value;
  address1.city = document.getElementById("inputCity").value;
  address1.street = document.getElementById("inputStreet").value;
  address1.number = document.getElementById("inputNumber").value;
  add = true;
  alert(
    `${address1.country}, ${address1.city}, ${address1.street}, ${address1.number},`
  );
  setTimeout(() => formTwo.remove());
  setTimeout(() => registerButton.remove());

  setTimeout(() => finnalyFunction(), 100);
}

function finnalyFunction() {
  alert(`Successfully registered`);
  alert(
    `${citizen1.firstname}, ${citizen1.lastname}, ${citizen1.age}, ${citizen1.address.country},  ${citizen1.address.city},  ${citizen1.address.street},  ${citizen1.address.number}`
  );
}
