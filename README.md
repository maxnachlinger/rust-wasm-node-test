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
v20.5.1
```

### Fibonacci Benchmarks
| | ops/sec | # of runs |
| :---------- | ----------: | ----------: |
| js fib 10 | 134,744,294 | 95 |
| wasm fib 10 | 28,785,904 | 90 |
| js fib 20 | 71,067,353 | 97 |
| wasm fib 20 | 28,464,356 | 83 |
| js fib 40 | 36,156,588 | 98 |
| wasm fib 40 | 26,987,523 | 86 |
| js fib 100 | 5,790,241 | 92 |
| wasm fib 100 | 20,935,604 | 96 |
