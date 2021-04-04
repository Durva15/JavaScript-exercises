//Part 1: Link to the exercise:-https://www.rithmschool.com/courses/javascript/javascript-functions-exercises

function difference(num1,num2){
    return num1-num2;
}
//

function product(num1,num2){
    return num1*num2;
}
//

function printDay(num){
    

        const DAYS_OF_WEEK = {
          1: "Sunday",
          2: "Monday",
          3: "Tuesday",
          4: "Wednesday",
          5: "Thursday",
          6: "Friday",
          7: "Saturday",
        };
        return DAYS_OF_WEEK[num];
      }

      function lastElement(last){

        return last[last.length-1];
        
      }
//
      

      function numberCompare(a,b){
        if(a === b){
          return 'Numbers are equal';
        } else if(a > b){
          return 'First number is greater';
        }
        return 'Second number is greater';
      }
      
      function singleLetterCount(str1, letter){
        let finalCount = 0;
        for(let i=0; i< str1.length; i++){
          if(str1[i].toLowerCase() === letter.toLowerCase()){
            finalCount++;
          }
        }
        return finalCount;
      }
//

      
      //Part 2:


function multipleLetterCount(str){
  let finalObj = {};
    for(let i =0; i< str.length; i++){
      if (!(str[i] in finalObj)){
        finalObj[str[i]] = 1;
      } else {
        finalObj[str[i]]++;
      }
    }
    return finalObj;
  }
//

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
  //
  
  function isPalindrome(str){
    if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
          return false;
         }
       
       return true;
    }
   // 
  
