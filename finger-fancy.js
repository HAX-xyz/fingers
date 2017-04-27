function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function generateFingers(numberOfFingers) {
    for (var i = 0; i < numberOfFingers; i++) {
        var top = (Math.random() * 10000) % 700;
        var left = (Math.random() * 10300) % 700;
        var fingerDiv = '<div id="oneFinger' + i + '" style="font-size: 250px; position: absolute; top: ' + top + 'px; left: ' + left + '" >🖕</div>';
        $("#container").append(fingerDiv);
        await sleep(400);
    }
}

$(document).ready(function () {
    generateFingers(25);
});