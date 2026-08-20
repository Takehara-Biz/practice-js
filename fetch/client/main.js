'use strict';

{
  function showHeader() {
    console.log('Header');
  }

  const doFetch = (url) => {
    fetch(url).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log('Something went wrong user data.');
      console.log('Error log: ' + err);
    });
  }

  const showMainContents = () => {
    doFetch('http://localhost:3000/?sleep=1&error=false');
    doFetch('http://localhost:3000/?sleep=1&error=true');
    doFetch('http://localhost:3000/?sleep=3000&error=false');
  }

  // sleep関数の定義（ミリ秒を指定）
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function showFooter() {
    await sleep(1000);
    console.log('Footer');
  }

  showHeader();
  showMainContents();
  showFooter();
}