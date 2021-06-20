// Code your solution here
function findMatching(drivers, string){
  return drivers.filter(n => {
    return (n.toLowerCase() === string.toLowerCase)
  })
}

function findMatching(drivers, name){
  return drivers.filter( find_name => {
    return (find_name.toLowerCase() === name.toLowerCase())
   }
  )
}