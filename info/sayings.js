var sayings = ["Sometimes by losing a battle, you find a new way to win the war.", "Part of being a winner is knowing when enough is enough. Sometimes you have to give up the fight and walk away, and move on to something that's more productive.", "My whole life is about winning. I don't lose often. I almost never lose","Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game", "It is always good to be underestimated.", "What separates the winners from the losers, is how a person reacts to each new twist of fate.", "Everything I do in life is framed through the view of a businessman. That's my instinct. If I go into a pharmacy to buy shaving cream, then I'm going to look for the best deal on shaving cream.","Well real estate is always good, as far as I'm concerned", "In the end, you are not measured by how much you undertake, but by what you finally accomplish"];

var interval = setInterval(function(){
    var i = Math.floor(Math.random() * sayings.length);
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on("data", function(data){
    console.log(`STDIN Data Received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});
/*Running this file in terminal, node sayings.js will have the sayings continously show, to stop it just type the word stop */