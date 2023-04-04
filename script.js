//1
function rand(min, max) {
    if (min === null || max === null) {
        return 0;
    }

    if (max === undefined) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}

//2
function chooseDecimals(n, d) {
    if (typeof n !== "number" || typeof d !== "number") {
        return "Input harus berupa number";
    }

    return parseFloat(n.toFixed(d));
}

//3
function isItNumeric(input) {
    if (typeof input === "number") {
        return true;
    }

    if (typeof input !== "string") {
        return false;
    }

    return !isNaN(input) && !isNaN(parseFloat(input));
}

//4
function roundUpToFive(input) {
    if (typeof input !== "number" || !Number.isInteger(input)) {
        return "Input harus berupa integer";
    }

    return Math.ceil(input / 5) * 5;
}
