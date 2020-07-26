let input = prompt('How many people are coming to your wedding?');

// Your code here
var price = cost;

function cost(input){

    if(input > 200) {
        expect(price).toEqual(20000);
    }
    else if (input > 100) { 
        expect(price).toEqual(15000);
    }    
    else if (input > 50) { 
        expect(price).toEqual(10000);
    }    
    else {
        expect(price).toEqual(4000);
    } 
}
console.log('Your wedding will cost '+price+' dollars');