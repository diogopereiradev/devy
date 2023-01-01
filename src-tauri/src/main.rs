#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem, SystemTray, SystemTrayEvent};

fn system_tray_menu() -> SystemTrayMenu {
  let show = CustomMenuItem::new("show".to_string(), "Show");
  let hide = CustomMenuItem::new("hide".to_string(), "Hide");
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let tray_menu = SystemTrayMenu::new()
    .add_item(show)
    .add_item(hide)
    .add_native_item(SystemTrayMenuItem::Separator)
    .add_item(quit);
  tray_menu
}

fn system_tray() -> SystemTray {
  let tray_menu = system_tray_menu();
  let tray = SystemTray::new().with_menu(tray_menu);
  tray
}

fn main() {
  let tray = system_tray();
  tauri::Builder::default()
    .system_tray(tray)
    .on_system_tray_event(|app, event| match event {
      SystemTrayEvent::LeftClick { .. } => {
        let window = app.get_window("main").unwrap();
        window.show().unwrap();
      },
      SystemTrayEvent::MenuItemClick { id, .. } => {
        match id.as_str() {
          "show" => {
            let window = app.get_window("main").unwrap();
            window.show().unwrap();
          },
          "hide" => {
            let window = app.get_window("main").unwrap();
            window.hide().unwrap();
          },
          "quit" => {
            std::process::exit(0);
          },
          _ => {}
        }
      }
      _ => {}
    })
    .invoke_handler(tauri::generate_handler![])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}