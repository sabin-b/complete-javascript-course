'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// * api url: https://countries-api-836d.onrender.com/countries/

let renderCountry = function (data, className = '') {
  // * html
  let currency = data.region.slice(0, 3).toUpperCase();
  let countryName = data.name.common.slice(0, 3).toLowerCase();
  // console.log(countryName);

  let html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" alt="flag" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[countryName]}</p>
      <p class="country__row"><span>💰</span>${
        data.currencies[currency].name
      }</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('afterbegin', html);
  countriesContainer.style.opacity = 1;
};

// *xml http request
function getCountry(country) {
  // * first ajax call
  let response = new XMLHttpRequest();
  response.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  response.send();

  console.log('first');
  response.addEventListener('load', function () {
    let [data] = JSON.parse(this.responseText);

    console.log(data);

    // console.log((+data.population / 1000000).toFixed(2));

    // * object destructuring
    // let [, datademo] = JSON.parse(this.responseText);
    // let {
    //   name: { common },
    // } = datademo;
    // console.log(common);
    // console.log(data);

    // * call the re render country function
    renderCountry(data);

    // * call neighbour country
    let [neighbour] = data.borders;
    if (!neighbour) return;
    console.log('second');
    // * second ajax call
    let response2 = new XMLHttpRequest();
    response2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    response2.send();
    response2.addEventListener('load', function () {
      let [data2] = JSON.parse(this.responseText);
      renderCountry(data2);
    });
  });
}

// * first method
/*
function getCountryFetch(country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     // console.log(data.at(0));
  //     renderCountry(data.at(0));
  //   });

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => {
      if (!res.ok) throw new Error(`country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      // * render first value
      renderCountry(data.at(0));
      let [neighbour] = data.at(0).borders;
      console.log(neighbour);
      // * second value
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res2 => res2.json())
    .then(data2 => {
      console.log(data2.at(0));
      renderCountry(data2.at(0), 'neighbour');
    }) // * handling network errors
    .catch(err => console.log(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
}*/

// * error handling method

function getJson(url, errorMsg = 'some thing went wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
}

function getCountryFetch(country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, 'country not found')
    .then(data => {
      // * render first value
      renderCountry(data.at(0));
      let [neighbour] = data.at(0).borders;
      if (!neighbour) throw new Error('neighbour not found');
      // * second value
      // return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'border country not found'
      );
    })
    .then(data2 => {
      // console.log(data2.at(0));
      renderCountry(data2.at(0), 'neighbour');
    }) // * handling network errors
    .catch(err => console.log(err.message))
    .finally(() => (countriesContainer.style.opacity = 1));
}

// * event listen

let btnNotpressed = false;
btn.addEventListener('click', function () {
  if (!btnNotpressed) {
    // getCountryFetch('portugal');
    btnNotpressed = true;
  }
});

// ? coding challenge

function whereAmI(lat, lon) {
  // fetch(`https://geocode.xyz/${lat},${lon}?geoit=json`)
  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}`)
    .then(res => {
      if (!res.ok) throw new Error(`error found in geocode ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.address.city}, ${data.address.country}`);
    })
    .catch(err => console.log(err.message));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

// * promises
let lotteryPromise = new Promise(function (resolve, reject) {
  console.log('lottery draw is happening 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you win 🏆');
    } else {
      reject(new Error('you lost money 😖'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

navigator.geolocation.getCurrentPosition(function (position) {
  let { latitude, longitude } = position.coords;
});

// * async & await
let exampleCountry = async function (country) {
  let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = await res.json();
  console.log(data);
};

exampleCountry('portugal');
