// https://github.com/rahat2020/assignment-js


//PROBLEM NUMBER-01
//////////////////converting kilometer to meter/////////////
function kilometerToMeter(kilometer) {
    var Meter = kilometer * 1000;
    return Meter;
}
// var result = kilometerToMeter(10)
// console.log(result);



//PROBLEM NUMBER-02
////////////////////////BUDGET CACULATOR////////////////////////
function budgetCalculator(inpputwatch, inputphone, inputlaptop) {
    var result = inpputwatch + inputphone + inputlaptop;
    return result;
}
// var sum = budgetCalculator(50, 100, 500);
// console.log(sum);



//PROBLEM NUMBER-03
///////////////////HOTEL COST/////////////////////////////////////
function hotelCost(staydays) {
    var cost = 0;
    if (staydays <= 10) {
        cost = staydays * 100;
    }
    else if (staydays <= 20) {
        var firstTen = 10 * 100;
        var remaining = staydays - 10;
        var secondTen = remaining * 80;
        cost = firstTen + secondTen;
    }

    else {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remaining = staydays - 20;
        var thirdTen = remaining * 50;
        cost = firstTen + secondTen + thirdTen;
    }
    return cost;
}
// var count = hotelCost (30);
// console.log(count);



//PROBLEM NUMBER-04
/////////////////////////////MEGA FRIEND NAME////////////////////
function megaFriend(name) {
    var large = 0;
    var largest;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > large) {
            var large = name[i].length;
            largest = name[i];
        }
    }
    return largest;
}
// var nameOfmyFriend = ['alex karishma', 'Ms Dhoni', 'salman'];
// var resultOfName = megaFriend(nameOfmyFriend);
// console.log(resultOfName);


//////////////////////////////////////////PROBLEM SOLVED//////////////////////////////////////////