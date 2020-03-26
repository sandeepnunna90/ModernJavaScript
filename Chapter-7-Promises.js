// Asyncronus operations -  use promises
// Promise is an object that delivers data a later point in a program

// fetch returns a promise -
// to consume that promise we do a .then call on the result of fetch
// and supply a call back function "resp => {.....}" in the below code
// call back function will recieve the data from API

// the fetch api recieves raw data we do a .json (is an asyncronous operation)
// which returns a promise as well so we do another .then call on the result again
// and the call back of that method gives the result intended


const fetchData = () => {
  fetch('https://api.github.com').then(resp => {
    resp.json().then(data => {
      console.log(data)
    });
  });
}

fetchData();

// this syntax It gets more complex when nested more asynchronus operations or if we need to combine looping.

// Modern syntax - to make the await calls, we need to make the function async as shown below
// async await syntax helps us consume promises without having to nest .then calls
// Note - once use the async the function itself becomes an async function and returns a promise object

const fetchData2 = async () => {
  const resp = await fetch('https://api.github.com');
  const data = await resp.json();
  console.log(data);
}

fetchData2();
