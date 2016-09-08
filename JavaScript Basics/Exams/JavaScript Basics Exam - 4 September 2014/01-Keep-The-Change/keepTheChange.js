function keepTheChange(input) {
    var bill = input[0];
    var mood = input[1];
    var tips,
        firstDigit;

    if (mood === 'happy') {
        tips = bill * 0.1;
        console.log(tips.toFixed(2));
    } else if(mood === 'married'){
        tips = bill * 0.0005;
        console.log(tips.toFixed(2));
    } else if (mood === 'drunk') {
        bill = bill * 0.15;
        firstDigit = String(bill).charAt(0);
        firstDigit = Number(firstDigit);
        tips = Math.pow((bill), firstDigit);
        console.log(tips.toFixed(2));
    } else {
        tips = bill * 0.05;
        console.log(tips.toFixed(2));
    }
}

keepTheChange(['1230.83', 'drunk']);