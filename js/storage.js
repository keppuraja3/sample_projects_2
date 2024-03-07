// User Object
let userObj = {
  firstname: "Keppu",
  lastname: "Raja",
  age: 21,
  id: 87978,
  place: "Madurai",
  phone: 8787394647,
  email: "keppuraja3@gmail.com",
  username: "keppuraja",
  pass: "Keppu@1234",
};

// Set all object keys in localstorage:
localStorage.setItem("firstname", userObj.firstname);
localStorage.setItem("lastname", userObj.lastname);
localStorage.setItem("age", userObj.age);
localStorage.setItem("id", userObj.id);
localStorage.setItem("place", userObj.place);
localStorage.setItem("phone", userObj.phone);
localStorage.setItem("email", userObj.email);
localStorage.setItem("username", userObj.username);
localStorage.setItem("pass", userObj.pass);

// Variable declaration
const uname = document.getElementById("uname");
const upass = document.getElementById("upass");
const instruction = document.getElementById("instruction");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const id = document.getElementById("id");
const place = document.getElementById("place");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const username = document.getElementById("uusername");

//Display all stored object local data
fname.innerHTML = localStorage.getItem("firstname");
lname.innerHTML = localStorage.getItem("lastname");
age.innerHTML = localStorage.getItem("age");
id.innerHTML = localStorage.getItem("id");
place.innerHTML = localStorage.getItem("place");
phone.innerHTML = localStorage.getItem("phone");
email.innerHTML = localStorage.getItem("email");
username.innerHTML = localStorage.getItem("username");

//
function validation() {
  localStorage.setItem("username", userObj.username);
  localStorage.setItem("password", userObj.pass);

  let u = localStorage.getItem("username");
  let p = localStorage.getItem("password");

  if ((uname.value == u) & (upass.value == p)) {
    location.assign("./user.html");
  } else {
    instruction.innerHTML = "Username or Password is not correct";
  }
}
let add = 1 + 5;
console.log(add);
