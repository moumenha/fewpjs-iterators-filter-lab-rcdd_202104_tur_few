// Code your solution here

function findMatching(drivers, name){
  return drivers.filter( find_name => {
    return (find_name.toLowerCase() === name.toLowerCase())
   }
  )
}