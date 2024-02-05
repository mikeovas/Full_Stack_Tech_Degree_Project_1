/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * An array of Objects created showing Famous Quotes. 
 * An additional property was added called Tags to help group together the different quotes into categories.
***/

let quotes = [
  {
    quote: "All that is gold does not glitter; Not all who wander are lost; The old that is strong does not wither; Deep roots are not reached by the frost.",
    source: "J.R.R Tolkien",
    citation: "The Fellowship of The Ring",
    year: "1954",
    tag: "Wisdom"
  }, 

  {
    quote: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu",
    citation: "Tao Te Ching",
    year: "6th century BC",
    tag: "Wisdom"
  },

  {
    quote: "You Shall Not Pass !!!",
    source: "Gandalf the Grey",
    citation: "The Fellowship of The Ring",
    year: "1954",
    tag: "Entertainment"
  },

  {
    quote: "Logic clearly dictates that the needs of the many outweigh the needs of the few.",
    source: "Spock",
    citation: "The Wrath of Khan",
    year: "1982",
    tag: "Entertainment"
  },

  {
    quote: "Life is like a box of chocolates. You never know what you're gonna get.",
    source: "Forest Gump",
    citation: "The movie - Forest Gump",
    year: "1994",
    tag: "Entertainment"
  },

  {
    quote: "Even the smallest person can change the course of the future.",
    source: "Galadrial",
    citation: "The Fellowship of The Ring",
    year: "1954",
    tag: "Inspirational"
  },

  {
    quote: "The only thing we have to fear is fear itself.",
    source: "Franklin D. Roosevelt",
    citation: " 'Day of Infamy' Speech",
    year: "1933",
    tag: "Inspirational"
  },

  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle Onassis",
    citation: "Inspirational Speech",
    year: "2020",
    tag: "Inspirational"
  },

  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretsky",
    citation: "Sports Interview",
    year: "1990",
    tag: "Sports"
  },

  {
    quote: "You'll never know what you're capable of until you take that first step and just go for it.",
    source: "Natasha Hastings",
    citation: "Instagram Quote",
    year: "2016",
    tag: "Sports"
  },

  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source: "Ralph Waldo Emerson",
    citation: "Political Essay",
    year: "mid-19th century",
    tag: "Leadership"
  },

  {
    quote: "Don't tell people how to do things; tell them what to do and let them surprise you with their results.",
    source: "Georges S. Patton Jr.",
    citation: "Inspirational Speech",
    year: "1944",
    tag: "Leadership"
  }
];


/***
 * `getRandomQuote` function
 * Function will create a random number and use it as the index value for the quotes array in order to randomly choose a quotes object.
***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuoteObject = quotes[randomNumber];
    return randomQuoteObject;
};


/***
 * `printQuote` function
 * A random quote object is generated using the getRandomQuote() function and used to create a template literal based on several conditions, to be printed to the screen.
***/

function printQuote() {
  let randomQuote = getRandomQuote();

  let quoteToDisplay = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
    
    if (randomQuote.citation !=="") {
      quoteToDisplay = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>`
    }

    if (randomQuote.year !=="") {
      quoteToDisplay = `
        <p class="quote">${randomQuote.quote} </p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>`
    } 

    if (randomQuote.year !=="") {
      quoteToDisplay = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>`
    } 

    if (randomQuote.tag !=="") {
      quoteToDisplay = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
        <span class="tag">${randomQuote.tag}</span>`
    }  

  quoteToDisplay = quoteToDisplay + "/<p>";

  document.getElementById('quote-box').innerHTML = quoteToDisplay;

};

/***
 *  This section will have several functions to create a random color, in the form of a RGB color code, to use as the background display.
 *  A random RGB color code will be generated and then used to change the body background-color value.
 ***/

function getRandomNumber(max) {
  return Math.floor(Math.random() * max +1);
};    

function getRandomRGBColor() {
  let r = getRandomNumber(255);
  let g = getRandomNumber(255);
  let b = getRandomNumber(255);
  return [r,g,b];
}

function changeColor() {
  let RGBColor = getRandomRGBColor();
  console.log({RGBColor});  // to check that a random RGB color is being created...it appears to be
  document.getElementsByTagName('body').style.background-color = RGBColor;  // thought I could target the background-color value in the body using this code and then change its value
}

function clickHandler(event) {
  console.log('test 2')  // used to test the function works...will be removed later
  changeColor();
  event.preventDefault();
}

console.log(getRandomRGBColor());


/***
 * An initial quote is displayed. Then, a button with a click event listener is used to print a new random quote.
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", clickHandler, false);