// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return (false);
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
      
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (toVerify){
  
//   if (toVerify === true){
//     console.log(`✅ Assertion Passed ✅`)
//   }
//   else {
//     console.log(`‼️ Assertion Failed ‼️`)
//   }
// }

//assertArraysEqual(eqArrays(["1", "2", 3], ["1", "2", "3"]));

const without = function (source, itemsToRemove){
  let cleanArray = []; 
  //loop throught each item in the array 
  for (let i = 0; i < source.length; i++){
    //need nested loops because itemstoremove length != source length 
    for (let j = 0; j < itemsToRemove.length; j++){
      //if source != itemstoremove > , push it to cleanArray;  
      if (source[i] !== itemsToRemove[j]){
        
        cleanArray.push(source[i])
      }

    }
  }

  //return clean array 
  return cleanArray; 
}

//integrate this will assertArraysEqual function; 

console.log(without(["1", "2", "3"], [1, 2, "3"]) ); 