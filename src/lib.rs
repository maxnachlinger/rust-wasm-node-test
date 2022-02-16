extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

fn fibonacci_internal(n: i64) -> i64 {
    let mut x: i64 = 1;
    let mut y: i64 = 1;
    let mut temp: i64;

    for _ in 1..n {
        temp = x;
        x += y;
        y = temp
    }

    y
}

#[wasm_bindgen(js_name = fibonacci)]
pub fn fibonacci(n: f64) -> JsValue {
    JsValue::from(fibonacci_internal(n as i64) as f64)
}

#[cfg(test)]
mod tests {
    use wasm_bindgen_test::*;
    use super::*;

    #[wasm_bindgen_test]
    fn fibonacci_test() {
        let result = fibonacci_internal(10);
        assert_eq!(result, 55);
    }
}
