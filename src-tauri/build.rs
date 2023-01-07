use std::sync::{Arc, Mutex};

fn main() {
    let mutex = Arc::new(Mutex::new(false));

    {
        let mut guard = mutex.lock().unwrap();
        if !*guard {
            *guard = true;
            tauri_build::build();
        }
    }
}