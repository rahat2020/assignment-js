
//converting kilometer to meter

function kilometerToMeter(kilometer) {
    var Meter = kilometer / 0.621371;
    return Meter;
}
var result = kilometerToMeter(10)
console.log(result);



//budget calculator
function budgetCalculator(inpputwatch, inputphone, inputlaptop) {
    var result = inpputwatch + inputphone + inputlaptop;
    return result;
}

var sum = budgetCalculator(50, 100, 500);
console.log(sum);
