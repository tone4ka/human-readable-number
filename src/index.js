module.exports = function toReadable (number) {
    let units=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens=['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  let numberArray=String(number).split('');
  let result='';
  if (numberArray.length===3){
      result=result+units[numberArray[0]] +' hundred ';
      if(numberArray[1]===0 && numberArray[2]===0) return result.trim();
  }
  if (numberArray[1]===1){
    result+=teens[numberArray[numberArray.length-1]];
    return result.trim();
  }
  if(numberArray[1]>1){
      result=result+tens[numberArray[1]-2];
      if(numberArray[numberArray.length-1]===0) return result.trim();
  }
  
    result+=units[numberArray[numberArray.length]];

    return result.trim();
    
  
}
