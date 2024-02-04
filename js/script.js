/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * An array of Objects showing Famous Quotes. 
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
    quote: "Life is like a box of chocolates. You never know what you're gonna get.",
    source: "Forest Gump",
    citation: "The movie - Forest Gump.",
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
    quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    source: "Martin Luther King Jr.",
    citation: "'Loving Your Enemies Sermon' ",
    year: "1957",
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
***/

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);