# fun with Rust, WASM, and Node

[Here's some additional WASM/Rust fun as well](https://github.com/maxnachlinger/maze-challenge)

## Setup

- [Install Rust](https://www.rust-lang.org/tools/install)
- get `wasm-pack`: `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`
- install NPM deps: `npm i`

## Build
```shell
npm run build
# Or
# wasm-pack build --release --target nodejs --out-dir dist --out-name index
```

## Run Rust tests
```shell
wasm-pack test --node
```

## Run Rust linting
```shell
cargo clippy
```

## Benchmark:
```shell
npm run bench
```

## Results on my machine

```shell
node -v
v20.11.0
```

### Fibonacci Benchmarks
| | ops/sec | # of runs |
| :---------- | ----------: | ----------: |
| js fib 10 | 144,564,191 | 99 |
| wasm fib 10 | 88,475,813 | 101 |
| js fib 20 | 76,905,343 | 99 |
| wasm fib 20 | 85,322,069 | 97 |
| js fib 40 | 39,763,451 | 98 |
| wasm fib 40 | 73,001,010 | 102 |
| js fib 100 | 6,661,336 | 100 |
| wasm fib 100 | 38,729,602 | 102 |