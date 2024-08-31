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
v22.7.0
```

### Fibonacci Benchmarks
| | ops/sec | # of runs |
| :---------- | ----------: | ----------: |
| js fib 10 | 87,600,274 | 90 |
| wasm fib 10 | 64,549,231 | 90 |
| js fib 20 | 57,405,333 | 90 |
| wasm fib 20 | 62,235,190 | 94 |
| js fib 40 | 33,332,859 | 98 |
| wasm fib 40 | 54,507,955 | 94 |
| js fib 100 | 13,855,898 | 98 |
| wasm fib 100 | 32,585,150 | 95 |
