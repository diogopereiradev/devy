#![windows_subsystem = "windows"]

use std::env;
use sysinfo::{ProcessExt, PidExt, System, SystemExt};
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

fn check_multiple_instances() {
  let s = System::new_all();
  for (pid, process) in s.processes() {
    if std::process::id() != pid.as_u32() && process.name() == "Devy.exe" {
      std::process::exit(0);
    }
  }
}

fn main() {
  if cfg!(target_os = "windows") {
    check_multiple_instances();

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
  } else {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
  }
}
