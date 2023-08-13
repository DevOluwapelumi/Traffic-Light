const red = document.getElementById('red') 
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const count = document.getElementById('counter')


function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
var myVar = setInterval(myTimer, 1000);
     
function counter() {
    var i = 0;

    setInterval(function () {
        if  (i == 100) clearInterval(this);
        else count.innerText = 'Currently at ' + (1+i++);
    }, 1000); 
}
counter()


const redBulbOn = () => {
    red.style.backgroundColor = "red"
    console.log('redBulb turned on');
}
const yellowBulbOn = () => {
    yellow.style.backgroundColor = "yellow"
    console.log('yellowBulb turned on');

}
const greenBulbOn = () => {
    green.style.backgroundColor = "green"
    console.log('greenBulb turned on');

}
const redBulbOff = () => {
    red.style.backgroundColor = "black"
    console.log('redBulb turned off');
}
const yellowBulbOff = () => {
    yellow.style.backgroundColor = "black"
    console.log('yellowBulb turned off');

}
const greenBulbOff = () => {
    green.style.backgroundColor = "black"
    console.log('greenBulb turned off');
    
}

setInterval(
    () => {
        console.log('second')
    },
    1000
);

let lights = () => {
    setTimeout(redBulbOn, 1000)
    setTimeout(redBulbOff, 3000)
    setTimeout(yellowBulbOn, 3000)
    setTimeout(yellowBulbOff, 4000)
    setTimeout(yellowBulbOn, 5000)
    setTimeout(yellowBulbOff, 6000)
    setTimeout(yellowBulbOn, 7000)
    setTimeout(yellowBulbOff, 8000)
    setTimeout(greenBulbOn, 8500)
    setTimeout(greenBulbOff, 9500)
    setTimeout(greenBulbOn, 10500)
    setTimeout(greenBulbOff, 11500)
}
lights()
setInterval(lights, 13500)