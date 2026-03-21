function test() {
    if (true) {
        var x = 10;
    }
    console.log(x); //  10 (function-scoped)
}

test();