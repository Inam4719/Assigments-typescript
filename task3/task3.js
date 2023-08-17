"use strict";
const myName = "Inam Khan";
const lowerCase = myName.toLowerCase();
const upperCase = myName.toUpperCase();
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
const titleName = toTitleCase(myName);
console.log("Original name:", myName);
console.log("Lowercase:", lowerCase);
console.log("uppercase name:", upperCase);
console.log("Title case name:", titleName);
