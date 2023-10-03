// Code your solution here
function  findMatching( drivers , name){
    
    return drivers.filter( drivers => drivers.toLowerCase() === name.toLowerCase())
}

function   fuzzyMatch(drivers ,letter){

    return drivers.filter( drivers => drivers.startsWith(letter) )

}
function  matchName(drivers , name){
 
    return drivers.filter(drivers => drivers.name === name);
    }
    
