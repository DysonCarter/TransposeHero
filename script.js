var key = document.getElementById("key");
var transposed = document.getElementById("transposed");

key.addEventListener("change", updateKey);
transposed.addEventListener("change", updateKey);

var keyDict = {
    1: 'A',
    2: 'B♭',
    3: 'B',
    4: 'C',
    5: 'D♭',
    6: 'D',
    7: 'E♭',
    8: 'E',
    9: 'F',
    10: 'G♭',
    11: 'G',
    12: 'A♭'
};

function getCapo(start, end) {
    if (start === end) {
        return 0;
    }
    var capoPosition = (start - end + 12) % 12;
    return capoPosition === 0 ? 12 : capoPosition;
}

function updateKey() {
    var keyValue = parseInt(key.value);
    var transposedValue = parseInt(transposed.value);
    var capoPosition = getCapo(keyValue, transposedValue);
    document.getElementById("result").textContent = `Capo on fret ${capoPosition}`;
    document.getElementById("chords").innerHTML = `
    <table>
        <tr>
            <td><b>You Play:</b></td>
            <td>${keyDict[transposedValue]}</td>
            <td>${keyDict[(transposedValue + 2 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(transposedValue + 4 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(transposedValue + 5 - 1) % 12 + 1]}</td>
            <td>${keyDict[(transposedValue + 7 - 1) % 12 + 1]}</td>
            <td>${keyDict[(transposedValue + 9 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(transposedValue + 11 - 1) % 12 + 1]}dim</td>
        </tr>
        <tr>
            <td><b>#:</b></td>
            <td>I</td>
            <td>ii</td>
            <td>iii</td>
            <td>IV</td>
            <td>V</td>
            <td>vi</td>
            <td>vii</td>
        </tr>
        <tr>
            <td><b>You're Playing:</b></td>
            <td>${keyDict[keyValue]}</td>
            <td>${keyDict[(keyValue + 2 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(keyValue + 4 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(keyValue + 5 - 1) % 12 + 1]}</td>
            <td>${keyDict[(keyValue + 7 - 1) % 12 + 1]}</td>
            <td>${keyDict[(keyValue + 9 - 1) % 12 + 1]}m</td>
            <td>${keyDict[(keyValue + 11 - 1) % 12 + 1]}dim</td>
        </tr>
    </table>`;

}

updateKey();
