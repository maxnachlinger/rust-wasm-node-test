const {fibonacci} = require('../dist');
const {jsFibonacci} = require('../benchmarks/js-fibonacci');

const test = (n) => {
    console.time(`js fib ${n}`);
    const jsResult = jsFibonacci(n);
    console.timeEnd(`js fib ${n}`);

    console.time(`wasm fib ${n}`);
    const wasmResult = fibonacci(n);
    console.timeEnd(`wasm fib ${n}`);
    console.log(jsResult, wasmResult);
};

[20, 40].forEach(test);
