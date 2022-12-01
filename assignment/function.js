function difference (num1,num2) {
    return num1 - num2;
    
}

console.log(difference(2,2));
console.log(difference(0,2));


function product (num1,num2) {
    return num1 * num2;
    
}
console.log(product(2,2));
console.log(product(0,2));

function printDay (num) {
    let day = {
        1: "Sun",
        2: "Mon",
        3: "Tues",
        4: "Wed",
        5: "Thurs",
        6: "Fri",
        7: "Sat",
    };
    return day[num];
}

console.log(printDay(4));
console.log(printDay(41));

function numCompare(num1, num2) {
    if(num1 === num2){
        return 'Numbers are equal';
      } else if(num1 > num2){
        return 'First is greater';
      } else
      return 'Second is greater';

}
console.log(numCompare(1,1));
console.log(numCompare(2,1));
console.log(numCompare(1,2));


function lastElement(arr) {
    return arr[arr.lentgh-1];
}
console.log(lastElement([1,2,3,4]));
console.log(lastElement([]));


function singleLetterCount(str1, letter){
    let finalCount = 0;
    for(let i=0; i< str1.length; i++){
      if(str1[i].toLowerCase() === letter.toLowerCase()){
        finalCount++;
      }
    }
    return finalCount;
  }

  console.log(singleLetterCount('amazing','A'));
  console.log(singleLetterCount('Rithm School','o'));

  function multipleLetterCount(str){
    str = str.toLowerCase();
    let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (finalObj[str[i]] === undefined){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }

  console.log(multipleLetterCount("hello"));
  console.log(multipleLetterCount("person"));


  function arrayManipulation(arr, command, position, val){
    if(command === 'remove'){
      if(position === 'end'){
        return arr.pop();
      }
        return arr.shift();
    }
    else if(command === 'add'){
      if(position === 'end'){
        arr.push(val)
        return arr;
      }
      arr.unshift(val)
      return arr;
    }
  }

  console.log(arrayManipulation([1,2,3], "remove", "end"));
  console.log(arrayManipulation([1,2,3], "remove", "beginning"));
  console.log(arrayManipulation([1,2,3], "add", "beginning", 20));
  console.log(arrayManipulation([1,2,3], "add", "end", 30));


  
  function isPalindrome(str){
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  }

    console.log(isPalindrome('testing')); 

    console.log(isPalindrome('tacocat')); 

    console.log(isPalindrome('hannah'));

    console.log(isPalindrome('robert'));
