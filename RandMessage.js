//first list of people 8 people in total//
const peopleList = ["Snoop Dogg", "Albert Einstein", "50 Cent", "Brian May", "David Attenborough", "Jimi Hendrix", "Stephen King", "Neil Gaiman"]

//Verbs list 8 in total//
const verbsList = ["carried out massages with", "went on a segway tour with", "Laughed over a bottle of rose with", "went skinny dipping with", "got freaky with", "went people watching with", "played american football with", "dressed as clowns with"]

//Second list of people 8 in total//
const peopleList2 = ["Dylan Bonds", "Jalen Hurts", "Stephen Hawkings", "Cillian Murphy", "Jon Leyshon", "Frosty the Snowman", "Ariana Grande", "Biggie Smalls"]


function createSentence () {
//random number//
function randomNum(array) {
    return Math.floor(Math.random() * array.length);
}
//list selectors//
let firstPerson = peopleList[randomNum(peopleList)];
let verb = verbsList[randomNum(verbsList)];
let secondPerson = peopleList2[randomNum(peopleList2)];

//Sentence joining//
let fullString = `${firstPerson} ${verb} ${secondPerson}`;

return "did you know " + fullString + "?"

}



console.log(createSentence())