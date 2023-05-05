
let counterValue = 0

function decreaseCounter() {
    counterValue--
    document.getElementById("count").innerHTML =counterValue ;
}
function resetCounter() {
    counterValue = 0
    document.getElementById("count").innerHTML =counterValue ;
}
function increaseCounter() {
    counterValue++
    document.getElementById("count").innerHTML =counterValue;
}