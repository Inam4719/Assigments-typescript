"use strict";
var username = ["admin", "eric", "ahmad", "ali"];
for (var i = 0; i < username.length; i++) {
    if (username[i] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello" + username[i] + ", thank you for logging in again.");
    }
}
