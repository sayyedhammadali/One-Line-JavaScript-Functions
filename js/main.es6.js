// 1.
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// 2.
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

// 3.
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// 4.
const goToTop = () => window.scrollTo(0, 0);

// 5.
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// 6.
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;

// 7.
const isWeekday = (date) => date.getDay() % 6 !== 0;

// 8.
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

// 9.
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);

// 10.
const timeFromDate = date => date.toTimeString().slice(0, 8);

// 11.
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';

// 12.
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");

// 13.
const stringReverse = str => str.split("").reverse().join("");

// 14.
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// 15.
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d)

// 16.
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

// 17.
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// 18.
const getParameters = (URL) => {
    URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
    return JSON.stringify(URL);
};

// 19.
const average = arr => arr.reduce((a, b) => a + b) / arr.length;

// 20.
const touchSupported = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

// 21.
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 22.
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// 23.
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));

// 24.
const randomBoolean = () => Math.random() >= 0.5;

// 25.
const removeDuplicates = (arr) => [...new Set(arr)];

// 26.
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

// 27.
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
