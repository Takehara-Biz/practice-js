'use strict';

{
  function showHeader() {
    console.log('Header');
  }

  const showUsers = () => {

    fetch('https://dotinstall.github.io/setup/fetchapi/users.json').then((response) => {
      return response.json();
    }).then((users) => {
      console.log(users);
    }).catch((err) => {
      console.log('Something went wrong user data.');
      console.log('Error log: ' + err);
    });
  }


  function showFooter() {
    console.log('Footer');
  }

  showHeader();
  showUsers();
  showFooter();
}