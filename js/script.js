/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * Each quote contains
 *    quote:    the actual words of the quotation
 *    source:   name of the speaker of the quotation
 *    year:     the year the quotation was spoken
 *    citation: where the quotation can be found
***/

// Auto refresh the page every few seconds
setInterval(printQuote, 5000);

let quotes = [
  {
    quote: "Hello? Is it me you're looking for?",
    source: "Lionel Richie Jr.",
    year: 1984,
    citation: "Can't Slow Down",
    tags: ["1980s", "Quiet Storm"]
  },
  {
    quote: "I can't stand the rain... against my window.",
    source: "Melissa Elliott",
    year: 1997,
    citation: "Supa Dupa Fly",
    tags: ["1990s", "Hip-Hop"]
  },
  {
    quote: "There's a ribbon in the sky for our love.",
    source: "Stevland Morris",
    year: 1982,
    citation: "Original Musiquarium I",
    tags: ["1980s", "Quiet Storm"]
  },
  {
    quote: "This is what it sounds like... when doves cry.",
    source: "Prince Nelson",
    year: 1984,
    citation: "Purple Rain",
    tags: ["1980s", "#1 Hit", "Soundtrack"]
  },
  {
    quote: "I compare you to a kiss from a rose on the gray.",
    source: "Henry Samuel",
    year: 1994,
    citation: "Seal II",
    tags: ["1990s", "Grammy Winner", "#1 Hit", "Soundtrack"]
  },
  {
    quote: "Yeah!",
    source: "Usher Raymond IV",
    year: 2004,
    citation: "Confessions",
    tags: ["2000s", "Grammy Winner", "#1 Hit"]
  },
  {
    quote: "All I want for Christmas is you!",
    source: "Mariah Carey",
    year: 1994,
    citation: "Merry Christmas",
    tags: ["1990s", "#1 Hit", "Seasonal"]
  },
]

// return a random number between 0 and one less than the given number (n-1)
const randomNum = (number) => Math.floor(Math.random() * number);

/***
 * `getRandomQuote` function
 * Return a random quote object from the quotes[] array
***/
function getRandomQuote(array) {
  //let rand = Math.floor (Math.random() * array.length);
  return array[randomNum(array.length)];
}

function getRGB(max) {
  if (!max || max > 255) { max = 255; }

  let red = randomNum(max);
  let green = randomNum(max);
  let blue = randomNum(max);
  rgbText = `rgb(${red}, ${green}, ${blue})`;
  console.log(rgbText);
  return rgbText;
}

// add a HTML <style> tag to the <head> tag
let hasStyle = false;

function addStyle() {
  if (hasStyle) {
    console.log("Style tag already present");
  } else {
    let head = document.querySelector('head');
    head.innerHTML += `<style></style>`;
    hasStyle = true;
    console.log("Style tag added");
  }

  let style = document.querySelector('style');
  return style;
}
/***
 * `changeBGcolor` function
 * change the background color of the HTML page
 ***/
function changeBGcolor() {
  style = addStyle();
  style.innerHTML = `body { background-color: ${getRGB(150)} }`;
}

function autoRefresh(time) {
  if (!time)        { time = 10000; }
  if (time > 20000) { time = 20000; }
  if (time < 5000)  { time = 5000; }

  setInterval(printQuote, time);
}

/***
 * `printQuote` function
 * Print the quote and attributes to the quote-box element on the webpage
***/
function printQuote() {
   changeBGcolor();
  
  // Select the HTML object to modify
  let quoteBox = document.getElementById('quote-box');
  
  // get a random quote from the array
  myQuote = getRandomQuote(quotes);

  // write the HTML code for the quotation and source
  let info = '';
  info += `<p class="quote">${myQuote.quote}</p>`;
  info += `<p class="source">${myQuote.source}`;

  // if applicable, include optional elements (citation, year, tags)
  if (myQuote.citation) {
    info += `<span class="citation">${myQuote.citation}</span>`;
  }
  
  if (myQuote.year) {
    info += `<span class="year">${myQuote.year}</span>`;
  }

  if (myQuote.tags) {
    info += `<br /><span class="tags" style="color: #CCC">`;
    info += `| ${myQuote.tags.join(' | ')} |</span>`;
  }

  // close HTML paragraph tag and output to HTML page
  info += '</p>';
  quoteBox.innerHTML = info; 
  

  console.log(info);
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);