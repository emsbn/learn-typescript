// api url
var url = "https://jsonplaceholder.typicode.com/users";

// dom
var nameNode = document.querySelector("#username");
var emailNode = document.querySelector("#email");
var addressNode = document.querySelector("#address");

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      const { name, email, address } = user[0];
      nameNode.innerText = name;
      emailNode.innerText = email;
      addressNode.innerText = address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
