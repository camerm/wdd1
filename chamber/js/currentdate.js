const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${monthName} ${d.getDate()} ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;
document.getElementById("lastupdate").textContent = fulldate;


/*** ---------------------Hamburger menu--------------  */
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


/*** --------------------- visits--------------  */
// initialize display elements
const lastDisplay = document.querySelector(".day-since");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("visits-number"));
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
if (lastVisit !== 0) {
	lastDisplay.textContent =Math.trunc((Date.now() - lastVisit)/86400000);
} else {
	lastDisplay.textContent = `This is your first visit!`;
}
// increment the number of visits.
numVisits++;
lastVisit = Date.now();
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visits-number", lastVisit);