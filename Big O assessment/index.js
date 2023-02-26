function addtoZero([]);
let target = 0
for (let i=0; i<arr.length; i++) {
    const curNum = arr[i];
    for (let j=i+1; j<arr.length; j++) {
      if ((curNum + arr[j]) === target) {
        console.log('true')}
        else {console.log('false')}
      }
    }
// I think is function is O(1), The target number always stays the same
function hasUniqueChars(pizza){ 
    for(i = 0; i<pizza.length-1; i++){ 
    	for(j = i+1; j<pizza.length; j++){ 
        	if (s[i] == s[j]) return false; 
        } 
    } 
    return true; 
} 
// I think this function is O(1), Looking at property of pizza
function isPangram(Ilovedogs){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  // I think this function is O(1), Looking at property of Ilovedogs
  function findLongestWord(hello, my, name, is, trevor) {
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  // I thinkl this function is O(n), Looking at multiple items
