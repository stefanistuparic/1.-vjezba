var imena = ["Ivana", "Sanjin" , "Marijan" , "Doroti" , "Damir" , "Lorena" , "Ružica"];
imena.forEach(element => console.log(element));

var slijed = [["dijete" , "odrasla osoba"] , ["računalo" , "pisača mašina"] , ["mokro" , "suho"]];
console.table(slijed);
slijed.push(["gladan" , "sit"]);
console.table(slijed);

//skraćena verzija
function temperatura () {
    var unos = prompt("Enter degrees in Farenheit:");
    return (alert(unos + " degrees in Farenheit = " + ((5/9) * (unos -32)).toFixed(2) + " in Celsius"));
}  

//duža verzija
function temperatura () {
    var unos = prompt("Enter degrees in Farenheit:");
    var rezultat = (5/9) * (unos -32);
    return (alert(unos + " degrees in Farenheit = " + rezultat.toFixed(2) + " in Celsius"));
}

//nino verzija
var input = window.prompt("Enter degrees in farenheint");
function toCelsius() {
  return (5/9) * (input-32);
}
alert(input + " degrees fahrenheit equls to " + toCelsius().toFixed(1) + " degrees celsius.");