var current_users = ['admin', 'Eric', 'Alice', 'John', 'Megan'];
var new_users = ['Alice', 'Bob', 'John', 'David', 'Jane'];

for (var i = 0; i < new_users.length; i++) {
    var isTaken = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    
    if (isTaken) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    } else {
        console.log("The username '" + new_users[i] + "' is available.");
    }
}