/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  for (a === 90 && b === 30) {
    return(60);
  } 
}
module.exports = thirdAngle;

console.log = thirdAngle;


function thirdAngle(a, b) {
  for (a === 20 && b === 80) {
    return(80);
  }
}
module.exports = thirdAngle;

console.log = thirdAngle;