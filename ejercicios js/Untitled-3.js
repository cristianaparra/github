function first() {
    var botella = 99;

    while (botella > 0){

        switch (botella) {
            case 1:
                console.log(botella + " bottle of milk on the wall, " + botella + " bottle of milk. Take one down, pass it around, no more bottles of milk on the wall.");
                console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
                break;
                
            // case 0:
            //     console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
            //     break;
                
            default:
            console.log(botella + " bottles of milk on the wall, " + botella + " bottles of milk. Take one down, pass it around " + (botella - 1) + " bottles of milk on the wall.");
            break;
        }

        botella--;
    }
}




first();

