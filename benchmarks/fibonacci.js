'use strict';

const Benchmark = require('benchmark');
const {jsFibonacci} = require('./js-fibonacci.js');
const {fibonacci} = require('../dist');

const suite = Benchmark.Suite({
    onError(...args) {
        console.log('ERROR!', ...args);
    },
});

const results = [];

suite
    .add('js fib 10', function () {
        jsFibonacci(10);
    })
    .add('wasm fib 10', function () {
        fibonacci(10);
    })
    .add('js fib 40', function () {
        jsFibonacci(40);
    })
    .add('wasm fib 40', function () {
        fibonacci(40);
    })
    .add('js fib 50', function () {
        jsFibonacci(50);
    })
    .add('wasm fib 50', function () {
        fibonacci(50);
    })
    .add('js fib 100', function () {
        jsFibonacci(100);
    })
    .add('wasm fib 100', function () {
        fibonacci(100);
    })
    .on('cycle', function (event) {
        results.push(event.target);
    })
    .on('complete', function () {
        console.log(`### Fibonacci Benchmarks
| | ops/sec | # of runs |
| :---------- | ----------: | ----------: |`);

        results.forEach((result) => {
            const {
                name,
                hz,
                stats: {sample},
            } = result;
            const ops = Math.round(hz).toLocaleString('en-US');
            const runs = sample.length;
            console.log(`| ${name} | ${ops} | ${runs} |`);
        });
    })
    .run({async: true});
