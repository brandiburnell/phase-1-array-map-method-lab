const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  // iterate through array
  let casedTutorials = tutorials.map(title => {
    // Split title into an array of individual words
    let titleWords = title.split(" ");
    // capitalize the first letter of each word
    let capitalizedTitleWords = titleWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Combine capitalized words back into one array
    let combinedCapitalizedWords = capitalizedTitleWords.join(" ");
    return combinedCapitalizedWords;
  })

  return casedTutorials;
}




// const titleCased = () => {

//   // iterate through array

//     const oneTitle = tutorials[0].split(" ");
//     console.log(oneTitle);
//     const capitalizedOneTitle = oneTitle.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     console.log(capitalizedOneTitle);
//     const joinedCapitalizedTitle = capitalizedOneTitle.join(" ");
//     console.log(joinedCapitalizedTitle);

//   //return casedTutorials;
// }
