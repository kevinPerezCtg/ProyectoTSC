function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    return "A " + persona + " le gustan los siguientes deportes " + deportes.join(",");
}
console.log(deportes("Kevin ", "Futbol", "Beisbol", "Tenis"));
function ejemplo(requerido, porDefault, opcional) {
    if (porDefault === void 0) { porDefault = "algo"; }
}
