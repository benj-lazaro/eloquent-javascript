/* Write a loop that calls console.log 7 times to output the following
#
##
###
####
#####
######
#######
NOTE: You can find the length of a string using the property .length
*/

let character = "";

// for loop implementation
console.log("For Loop")
for (let count = 0; count < 7; count++) {
    character += "#";
    console.log(character);
}

// while loop implementation
console.log("White Loop");
character = "";
while (character.length < 7) {
    character += "#";
    console.log(character);
}