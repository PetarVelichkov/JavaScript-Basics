function kitodar(input){
    var gold = 0,silver = 0,diamonds = 0;

    for (var i = 0; i < input.length; i++) {
        var line = input[i];

        line = line.replace(':',' : ');
        line = line.replace('-',' - ');
        line = line.replace(/\s\s+/g, ' ');
        line = line.trim();

        var infoLine = line.split(' ');
        var contMine = infoLine[0];

        if (contMine === 'mine') {
            var value = Number(infoLine[infoLine.length - 1]);
            var symbol = infoLine[infoLine.length - 2];
            var ore = infoLine[infoLine.length - 3];

            if (ore === 'gold' && symbol === ':') {
                gold += value;
            }
            else if (ore === 'silver' && symbol === ':') {
                silver += value;
            }
            else if (ore === 'diamonds' && symbol === ':') {
                diamonds += value;
            }
        }
    }

    console.log('*Silver: ' + silver);
    console.log('*Gold: ' + gold);
    console.log('*Diamonds: ' + diamonds);
}
var input = [
    'mine bobovdol - gold: 10',
    'mine - diamonds: 5',
    'mine colas - wood: 10',
    'mine myMine - silver:  14',
    'mine silver:14 - silver: 14'
];
/*[ 'mine bobovDol - gold : 10',
 'mine medenRudnik - silver : 22',
 'mine chernoMore - shrimps : 24',
 'gold:50' ]
 */
kitodar(input);
