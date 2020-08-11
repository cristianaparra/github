var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
var domain = ['.net', '.us', '.io'];

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < pronoun.length; i++) {

    for (let e = 0; e < pronoun.length; e++) {
        console.log(pronoun[i] + adj[0] + noun[e]+domain[numeroRandom(0, 3)])

           
        }
}
for (let i = 0; i < pronoun.length; i++) {

    for (let e = 0; e < pronoun.length; e++) {
        console.log(pronoun[i] + adj[1] + noun[e]+ domain[numeroRandom(0, 3)])

           
        }
}