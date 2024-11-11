# fun with Rust, WASM, and Node

[Here's some additional WASM/Rust fun as well](https://github.com/maxnachlinger/maze-challenge)

## Setup

- [Install Rust](https://www.rust-lang.org/tools/install)
- get `wasm-pack`: `curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`
- install npm deps: `pnpm i`
- install `binaryen` - `brew install binaryen`

## Build

```shell
pnpm build
```

## Run Rust tests

```shell
wasm-pack test --node
```

## Benchmark:

```shell
pnpm bench
```

## Results on my machine

```shell
node -v
v23.1.0
```

### Fibonacci Benchmarks

|              |    ops/sec | # of runs |
|:-------------|-----------:|----------:|
| js fib 10    | 85,885,582 |        86 |
| wasm fib 10  | 16,031,028 |        96 |
| js fib 40    | 32,857,444 |        95 |
| wasm fib 40  | 14,402,679 |        98 |
| js fib 50    | 17,067,576 |        94 |
| wasm fib 50  | 12,867,424 |        98 |
| js fib 100   |  8,229,533 |        90 |
| wasm fib 100 | 10,872,934 |        97 |
