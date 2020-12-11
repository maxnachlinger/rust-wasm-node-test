'use strict';

const Benchmark = require('benchmark');
const {jsFibonacci} = require('./js-fibonacci.js');
const {fibonacci} = require('../dist');

const suite = Benchmark.Suite({
  onError (...args) {
    console.log('ERROR!', ...args);
  },
});

const results = [];

suite
  .add('js fib 20', function () {
    jsFibonacci(20);
  })
  .add('wasm fib 20', function () {
    fibonacci(20);
  })
  .add('js fib 40', function () {
    jsFibonacci(40);
  })
  .add('wasm fib 40', function () {
    fibonacci(40);
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
