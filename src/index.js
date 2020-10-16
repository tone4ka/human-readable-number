module.exports = function toReadable (number) {
    let units=['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens=['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens=['twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
  let numberArray=String(number).split('');
  let length=numberArray.length;
  let result='';
  if(number==0)return 'zero';
  if (length==3){
      result=result+units[numberArray[0]-1] +' hundred ';
      if(numberArray[1]==0 && numberArray[2]==0){
        return result.trim();
      } 
  }
  if (numberArray[length-2]&&numberArray[length-2]==1){
    result+=teens[numberArray[length-1]];
    return result.trim();
  }
  if(numberArray[length-2]>1){
    result=result+tens[numberArray[length-2]-2];
    if(numberArray[length-1]==0){
      return result.trim();
    } 
  }
  if(numberArray[length-2]!=1){
    result+=units[numberArray[length-1]-1];
    return result.trim();
  }
      

}
