//Capitalize char[0] (declaration)
function capFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = 'amsterdam';
var capital = capFirstLetter(city);
capFirstLetter(city); //Instead of calling variable

//Capitalize char[0] (expression)
var capFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);    
}
var city = 'rotterdam';
var capital = capFirstLetter(city);

//Return statement if input is != str. (declaration)
function capFirstLetter(str) {
    if(typeof str === 'number') {
        return 'That\'s not a string!'
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// var city = "amsterdam";
// var capital = capFirstLetter(city);
// If input != str first part of function is initiated
var input = 36;
var capital = capFirstLetter(input);

//Return statement if input is != str. (expression)
var capFirstLetter = function(str) {
    if(typeof str === 'number') {
        return 'That\'s not a string!'
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var input = 36;
var capital = capFirstLetter(input);
