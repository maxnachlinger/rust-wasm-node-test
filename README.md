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
| js fib 20 | 30,222,992 | 91 |
| wasm fib 20 | 36,712,178 | 91 |
| js fib 40 | 14,927,812 | 90 |
| wasm fib 40 | 33,018,424 | 88 |
| js fib 100 | 5,899,517 | 90 |
| wasm fib 100 | 20,615,242 | 87 |
