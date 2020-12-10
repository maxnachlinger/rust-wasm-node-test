# fun with Rust, WASM, and Node

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
