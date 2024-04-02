// Define a function called saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`; // Adjusted to match the test cases
  }
  
  // Define a function called mondayWork
  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`; // Adjusted to match the test cases
  }
  
  // Define a function called wrapAdjective
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("awesome")); // Output: You are !!!awesome!!!
  console.log(encouragingPromptFunction()); // Output: You are !!!special!!!
  