function minNum(a, b, c) {
    if (c < a && c < b) {
        return c;
    }
    else if (a < c && a < b) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else {
        return `${a},${b},${c}`;
    }
}

console.log(minNum(1,1,1));