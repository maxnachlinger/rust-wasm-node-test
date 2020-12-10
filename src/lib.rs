extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

fn fibonacci_internal(n: usize) -> u64 {
    let mut x : u64 = 1;
    let mut y : u64 = 1;
    let mut temp : u64;

    for _ in 1..n {
        temp = x;
        x = x+y;
        y = temp
    }

    y
}

#[wasm_bindgen(js_name = fibonacci)]
pub fn fibonacci(n: usize) -> JsValue {
    JsValue::from(fibonacci_internal(n) as f64)
}

#[cfg(test)]
mod tests {
    use wasm_bindgen_test::*;
    use super::*;

    #[wasm_bindgen_test]
    fn fibonacci_test() {
        let result = fibonacci_internal(50);
        assert_eq!(result, 12586269025);
    }
}
