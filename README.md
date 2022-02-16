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
v16.14.0
```

### Fibonacci Benchmarks
| | ops/sec | # of runs |
| :---------- | ----------: | ----------: |
| js fib 10 | 55,734,012 | 92 |
| wasm fib 10 | 36,006,047 | 94 |
| js fib 20 | 28,653,833 | 92 |
| wasm fib 20 | 34,368,805 | 90 |
| js fib 40 | 14,326,084 | 85 |
| wasm fib 40 | 31,257,028 | 92 |
| js fib 100 | 5,648,352 | 91 |
| wasm fib 100 | 21,044,147 | 92 |
