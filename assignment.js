// https://github.com/mohiuddin-likhon/assgnment

//1st task
function kilometerToMeter(kilo) {
    var meter = kilo * 1000;
    return meter;

}
//var result = kilometerToMeter(2);
//console.log(result);

// 2nd task
function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

//var budget = budgetCalculator(2, 4, 1);
//console.log(budget);

// 3rd task
function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var first10 = 10 * 100;
        var payable = days - 10;
        var second10 = payable * 80;
        cost = first10 + second10;
    }
    else {
        var first10 = 10 * 100;
        var second10 = 10 * 80;
        var payable = days - 20;
        var third10 = payable * 50;
        cost = first10 + second10 + third10;

    }
    return cost;

}

// var result = hotelCost(21);
// console.log(result);

//4th task

function megaFriend(friends) {
    var megaF = [0];
    var longestF;

    for (var i = 0; i < friends.length; i++) {
        var currentF = friends[i].length;

        if (currentF > megaF) {
            var megaF = currentF;
            longestF = friends[i];
        }

    }
    return longestF;
}

var friends = ["jamal", "mojammel", "shojib", "BANNNN"];
// var result = megaFriend(friends);
// console.log(result);
