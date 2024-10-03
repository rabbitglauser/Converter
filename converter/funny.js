class Primes {
    static *stream() {
        for (let p of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]) {
            yield p;

            let x = p + 1;
            while (true) {
                let y = 2;

                while (y <= x) {
                    if (y === x) {
                        console.log(x);
                        yield x;
                    }
                    if (x % y === 0) {
                        break;
                    }
                    y++;
                }
                x++;
            }
        }
    }
}
for (let prime of Primes.stream()) {
    console.log(`Prime number: ${prime}`);
}