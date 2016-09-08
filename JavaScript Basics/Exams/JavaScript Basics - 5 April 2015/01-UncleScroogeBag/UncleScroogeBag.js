function coin(input) {
    var type,
        coin,
        line,
        totalCoins = 0,
        gold = 0, silver = 0, bronze = 0, remainder;
    for (var i = 0; i < input.length; i++) {
        line = input[i];
        line = line.replace('\s+', ' ');
        line = line.trim();
        line = line.split(' ');
        type = line[0].toLowerCase();
        coin = Number(line[1]);
        if (type === 'coin') {
            if (coin % 1 === 0 && coin > 0) {
                totalCoins += coin;
            }
        }
    }
    gold = totalCoins / 100;
    remainder = totalCoins % 100;
    silver = remainder / 10;
    bronze = totalCoins % 10;
    console.log('gold : ' + Math.floor(gold));
    console.log('silver : ' + Math.floor(silver));
    console.log('bronze : ' + Math.floor(bronze));
}
var input = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];
coin(input);
