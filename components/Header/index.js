// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(hHeader, hDate, hTimes, hTemp) {
// define new elements
const header = document.createElement("header");
const date = document.createElement("span");
const times = document.createElement("h1");
const temperature = document.createElement("span");

// setup structure of elements
header.appendChild(date);
header.appendChild(times);
header.appendChild(temperature);

// set class names (from HTML)
header.classList.add("header");
date.classList.add("date");
temperature.classList.add("temp");

// set text content (use function parameter names)
header.textContent = hHeader;
date.textContent = hDate;
times.textContent = hTimes;
temp.textContent = hTemp;

return header;
}