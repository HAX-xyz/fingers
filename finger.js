let generateFingers = (() => {
    var _ref = _asyncToGenerator(function* (numberOfFingers) {
        for (var i = 0; i < numberOfFingers; i++) {
            var top = Math.random() * 10000 % 700;
            var left = Math.random() * 10300 % 700;
            var fingerDiv = '<div id="oneFinger' + i + '" style="font-size: 250px; position: absolute; top: ' + top + 'px; left: ' + left + '" >🖕</div>';

            $("#container").append(fingerDiv);
            yield sleep(400);
        }
        var hash = window.location.hash;
        var thingDiv = '<div id="thing" style="font-size: 250px; position: absolute; top: ' + top + 'px; left: ' + left + '" >' + hash + '</div>';
        $("#container").append(thingDiv);
    });

    return function generateFingers(_x) {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


$(document).ready(function () {
    generateFingers(25);
});
