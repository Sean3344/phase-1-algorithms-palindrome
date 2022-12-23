
function reverse(s){
  return s.split("").reverse().join("");
}
function isPalindrome(word) { 
  const reverWord = reverse(word)
  if(word === reverWord) {
    return true
  }
  else {
    return false
  }

}
  // Write your algorithm here


/* 
  Add your pseudocode here
* the function isPalindrome with one argument (a string) , 
itshould return true if the the reverse spell is equal to original 
otherwise false 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
