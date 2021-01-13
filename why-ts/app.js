// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var nameNode = document.querySelector("#username");
var emailNode = document.querySelector("#email");
var addressNode = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {
  response.address;
});

function startApp() {
  // axios
  //   .get(url)
  fetchUser
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      const { name, email, address } = user;
      nameNode.innerText = name;
      emailNode.innerText = email;
      addressNode.innerText = address.street;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
