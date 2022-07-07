/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnConvert = document.getElementById("btn-convert")
const input = document.getElementById("input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


btnConvert.addEventListener("click", function(){
    const val = Number(input.value)
    console.log(val)
    //set p value of length
    length.textContent = `${val} meters = ${ (val*3.281).toFixed(3) } feet | ${val} feet = ${ (val/3.281).toFixed(3) } meters`
    //set p value of volume
    volume.textContent = `${val} liters = ${ (val*0.264).toFixed(3) } gallons | ${val} gallons = ${ (val/0.264).toFixed(3) } liters`
    //set p value of weight
    mass.textContent = `${val} kilos = ${ (val*2.204).toFixed(3) } pounds | ${val} pounds = ${ (val/2.204).toFixed(3) } kilos`

})