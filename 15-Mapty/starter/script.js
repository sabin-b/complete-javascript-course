'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, eventLang;

// * main class
class App {
  #map;
  #eventLang;
  constructor() {
    this._getPosition();
  }

  // * geolocation
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('we have some error');
        }
      );
    }
  }

  // * load map()
  _loadMap(position) {
    // console.log(position);
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    // * leaflet map
    this.#map = L.map('map').setView(coords, 7);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // * listners
    this.#map.on('click', function (e) {
      // * assign the values
      this.#eventLang = e.latlng;

      // * remove classes
      form.classList.remove('hidden');
      inputDistance.focus();
    });
  }

  //
  _showForm() {}

  _toggleElevationField() {}

  _newWorkout() {}
}

let app = new App();

form.addEventListener('submit', function (e) {
  // * event prevent default
  e.preventDefault();

  // * all fields set to empty
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  let { lat, lng } = eventLang;

  // * marker
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workout')
    .openPopup();
});

inputType.addEventListener('change', function () {
  inputDuration.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});

// * mapty app finished /
// https://www.google.com.au/maps/@10.8211663,78.2897649

// const cookieDialogBox = document.querySelector('CybotCookiebotDialog');
// console.log(cookieDialogBox);

// const targetElement = document.querySelector('.cookie-open a'); // * target element class name or id
// let chatbotwiget = document.getElementById('CookiebotWidget');
// console.log(targetElement, chatbotwiget);
// targetElement.addEventListener('click', function (e) {
//   e.preventDefault();
//   chatbotwiget.classList.add('CookiebotWidget-open');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   // Use a timeout to wait for the element
//   const maxAttempts = 10; // Adjust as needed
//   let attempt = 0;
//   const cookieDialogBox = document.querySelector('#CybotCookiebotDialog');
//   const targetElement = document.querySelector('.cookie-open a');

//   function checkForDialog() {
//     if (cookieDialogBox) {
//       if (!cookieDialogBox.classList.contains('CybotMultilevel')) {
//         cookieDialogBox.style.opacity = 0;
//       }
//     } else if (attempt < maxAttempts) {
//       attempt++;
//       setTimeout(checkForDialog, 1000); // Check again in 1 second
//     } else {
//       console.log('Cookiebot dialog not found after multiple attempts.');
//     }
//   }

//   checkForDialog();

//   targetElement.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (!cookieDialogBox.classList.contains('CybotMultilevel')) {
//       cookieDialogBox.style.opacity = 1;
//       cookieDialogBox.classList.add('CybotCookiebotDialogActive');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   let cookieOpen = document.querySelector('.cookie-open');
//   let scriptLoaded = false;
//   cookieOpen.addEventListener('click', function (e) {
//     e.preventDefault();
//     loadCDNScript();
//     console.log('called click evenet');
//   });

//   function loadCDNScript() {
//     if (!scriptLoaded) {
//       // Create a script element
//       let script = document.createElement('script');

//       // Set the source (CDN URL) of the script
//       script.src =
//         'https://consent.cookiebot.com/uc.js?cbid=ec04723c-2c6a-43ba-a3d0-fdda20ebed44';

//       // create cookie widget
//       // * id
//       script.setAttribute('id', 'Cookiebot');

//       // *data-cbid
//       // script.setAttribute('data-cbid', 'ec04723c-2c6a-43ba-a3d0-fdda20ebed44');

//       // *data-blockingmode
//       // script.setAttribute('data-blockingmode', 'auto');

//       // * georegions
//       script.setAttribute(
//         'data-georegions',
//         `{'region':'us','cbid':'ec04723c-2c6a-43ba-a3d0-fdda20ebed44'}`
//       );

//       // * type
//       script.setAttribute('type', 'text/javascript');

//       // * loading
//       script.setAttribute('async', 'async');

//       // Add the script to the document's head
//       document.head.appendChild(script);

//       scriptLoaded = true;
//     }
//   }
// });

// // <script type="text/javascript" id="Cookiebot" src="https://consent.cookiebot.com/uc.js?cbid=d86f3feb-25d5-49f7-8c2a-dde71b89c370" data-georegions="{'region':'us','cbid':'fad02a99-137c-42ea-85d0-ccccec17eb60'}"></script>
