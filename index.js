// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(n => {
    return (n.toLowerCase() === string.toLowerCase());
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(n => {
    if (string.charAt(0) === n.charAt(0)){
    return n;
    }
  });
}

function matchName(drivers, name){
  return drivers.filter(find_name => {
    if (find_name.name == name){
      return find_name
    }
  })
}


// function matchName(drivers, name){
//   return drivers.filter( function(find_name){
//     if (find_name.name == name){
//       return find_name
//     }
//   })
// }
