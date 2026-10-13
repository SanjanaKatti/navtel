const icon = (name: string) => `/series-icons/${name}.svg`;

export const icons = {
  compact: icon("compact-device"),
  bluetooth: icon("bluetooth"),
  wired: icon("wired-interfaces"),
  usb: icon("usb-type-c-1"),
  gnss: icon("gnss"),
  network: icon("4g"),
  inputs: icon("inputs-and-outputs"),
  battery: icon("backup-battery"),
  protection: icon("electrical-protection"),
  memory: icon("internal-memory"),
  customLogic: icon("custom-logic"),
  can: icon("can-bus"),
  dualSim: icon("dual-sim-4g"),
  oneWire: icon("1-wire"),
  antenna: icon("external-antennas"),
  microSd: icon("microsd"),
} as const;

export const startHeroFeatures = [
  { title: "Ultra-compact", detail: "65.5 mm body", icon: icons.compact, node: "compact" },
  { title: "BLE sensors", detail: "Up to four", icon: icons.bluetooth, node: "ble" },
  { title: "Wired options", detail: "RS-485 models", icon: icons.wired, node: "wired" },
  { title: "USB Type-C", detail: "Setup & diagnostics", icon: icons.usb, node: "usb" },
  { title: "Multi-GNSS", detail: "GPS · GLONASS · BeiDou", icon: icons.gnss, node: "gnss" },
  { title: "2G & 4G", detail: "Choose by region", icon: icons.network, node: "network" },
] as const;

export const startFeatures = [
  { icon: icons.compact, title: "Ultra-Compact Design", text: "A 65.5 × 38.4 × 14.3 mm enclosure designed for discreet installation in limited spaces." },
  { icon: icons.inputs, title: "Vehicle Inputs & Control", text: "Monitor ignition, doors and other signals, then control compatible equipment through the output line." },
  { icon: icons.bluetooth, title: "Bluetooth Sensor Support", text: "Connect up to four supported BLE fuel, temperature, humidity and other sensors." },
  { icon: icons.wired, title: "RS-485 Options by Series", text: "S-20xx supports fuel-level sensor integration, while S-40xx opens RS-485 to Modbus and custom protocols." },
  { icon: icons.usb, title: "USB Type-C Setup", text: "Configure, diagnose and update the tracker directly from a computer without external vehicle power." },
  { icon: icons.customLogic, title: "Custom Logic on S-40xx", text: "Create on-device algorithms that react to telemetry and control equipment even when the server connection is unavailable." },
];

export const startModels = [
  { name: "S-2010", network: "2G", generation: "2g", badge: "Essential", battery: "No battery", inputs: "5 input lines", interface: "BLE 4.0", memory: "25,000 records" },
  { name: "S-2011", network: "2G", generation: "2g", badge: "Backup power", battery: "130 mAh battery", inputs: "5 input lines", interface: "BLE 4.0", memory: "25,000 records" },
  { name: "S-2013", network: "2G", generation: "2g", badge: "Wired sensors", battery: "130 mAh battery", inputs: "3 input lines", interface: "RS-485 FLS · BLE 4.0", memory: "25,000 records" },
  { name: "S-4011", network: "4G / 2G", generation: "4g", badge: "4G ready", battery: "130 mAh battery", inputs: "5 input lines", interface: "BLE 5.0", memory: "50,000 records" },
  { name: "S-4013", network: "4G / 2G", generation: "4g", badge: "Complete START", battery: "130 mAh battery", inputs: "3 input lines", interface: "RS-485 · Modbus · BLE 5.0", memory: "50,000 records" },
];

export const startStrengths = [
  { icon: icons.usb, title: "Powered through USB", text: "Configure and update devices without connecting an external power supply" },
  { icon: icons.protection, title: "Protected installation", text: "Operate from 9.5 to 47 V with input-line surge protection up to 200 V" },
  { icon: icons.memory, title: "Offline data storage", text: "Preserve telemetry during coverage gaps and transmit it after connectivity returns" },
  { icon: icons.battery, title: "Backup battery options", text: "Choose models that report external power loss and continue short-term operation" },
];

export const smartHeroFeatures = [
  { title: "CAN integration", detail: "Single or dual CAN", icon: icons.can, node: "compact" },
  { title: "BLE sensors", detail: "Up to four", icon: icons.bluetooth, node: "ble" },
  { title: "Wired interfaces", detail: "RS-232 · RS-485", icon: icons.wired, node: "wired" },
  { title: "Custom Logic", detail: "On-device automation", icon: icons.customLogic, node: "usb" },
  { title: "Dual SIM", detail: "Selected models", icon: icons.dualSim, node: "gnss" },
  { title: "2G & 4G", detail: "Choose by region", icon: icons.network, node: "network" },
] as const;

export const smartFeatures = [
  { icon: icons.inputs, title: "Configurable Inputs & Outputs", text: "Monitor digital, analog, pulse, frequency or RPM signals and control two compatible external devices." },
  { icon: icons.can, title: "CAN & Dual CAN Options", text: "Read vehicle parameters from one or two independent CAN buses on supported SMART models." },
  { icon: icons.wired, title: "Professional Wired Integration", text: "Connect compatible peripherals through RS-232, RS-485, Modbus RTU and 1-Wire, depending on the model." },
  { icon: icons.bluetooth, title: "Bluetooth Sensor Support", text: "Connect up to four compatible BLE fuel, temperature, humidity or custom sensors." },
  { icon: icons.oneWire, title: "Driver ID & Temperature", text: "Use 1-Wire accessories for driver identification and wired temperature monitoring." },
  { icon: icons.gnss, title: "Multi-GNSS Positioning", text: "Combine GPS, GLONASS and BeiDou signals for dependable tracking across demanding fleet operations." },
];

export const smartModels = [
  { name: "S-2421", network: "2G", generation: "2g", badge: "Core telemetry", battery: "380 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "1-Wire · BLE 4.0", memory: "25,000 records" },
  { name: "S-2425", network: "2G · Dual SIM", generation: "2g", badge: "Wired integration", battery: "380 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "RS-232 · RS-485 · 1-Wire", memory: "25,000 records" },
  { name: "S-2433", network: "2G", generation: "2g", badge: "Extended autonomy", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "RS-232 · RS-485 · Modbus", memory: "25,000 records" },
  { name: "S-2435", network: "2G · Dual SIM", generation: "2g", badge: "CAN integration", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "CAN · RS-232 · RS-485", memory: "51,500 records" },
  { name: "S-2437", network: "2G · Dual SIM", generation: "2g", badge: "Dual CAN", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "Dual CAN · RS-485 · 1-Wire", memory: "51,500 records" },
  { name: "S-4511", network: "4G / 2G", generation: "4g", badge: "Modern network", battery: "380 mAh battery", inputs: "5 inputs · 2 outputs", interface: "1-Wire · BLE 5.0", memory: "50,000 records" },
  { name: "S-4513", network: "4G / 2G · Dual SIM", generation: "4g", badge: "Connected sensors", battery: "380 mAh battery", inputs: "5 inputs · 2 outputs", interface: "RS-485 · 1-Wire · BLE 5.0", memory: "50,000 records" },
  { name: "S-4533", network: "4G / 2G · Dual SIM", generation: "4g", badge: "Maximum storage", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "RS-232 · RS-485 · Modbus", memory: "100,000 records" },
  { name: "S-4535", network: "4G / 2G · Dual SIM", generation: "4g", badge: "CAN integration", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "CAN · RS-232 · RS-485", memory: "100,000 records" },
  { name: "S-4537", network: "4G / 2G · Dual SIM", generation: "4g", badge: "Dual CAN", battery: "800 mAh battery", inputs: "3 universal inputs · 2 outputs", interface: "Dual CAN · RS-485 · 1-Wire", memory: "100,000 records" },
];

export const smartStrengths = [
  { icon: icons.usb, title: "Setup without vehicle power", text: "Configure, diagnose and update the tracker from a computer over USB without an external power supply" },
  { icon: icons.network, title: "Remote fleet operations", text: "Use DRC for remote configuration, diagnostics, firmware updates and group tasks across deployed devices" },
  { icon: icons.protection, title: "Protected vehicle installation", text: "Operate from 9.5 to 47 V with input-line surge protection up to 200 V" },
  { icon: icons.battery, title: "Built for long service", text: "A field-proven platform designed for dependable operation throughout long fleet deployments" },
];

export const signalHeroFeatures = [
  { title: "External antennas", detail: "GNSS & cellular", icon: icons.antenna, node: "compact" },
  { title: "6 inputs", detail: "Universal modes", icon: icons.inputs, node: "usb" },
  { title: "4 outputs", detail: "Extended control", icon: icons.wired, node: "wired" },
  { title: "Dual CAN", detail: "Two independent buses", icon: icons.can, node: "ble" },
  { title: "microSD", detail: "Up to 32 GB", icon: icons.microSd, node: "gnss" },
  { title: "Dual SIM", detail: "2G & 4G models", icon: icons.dualSim, node: "network" },
] as const;

export const signalFeatures = [
  { icon: icons.inputs, title: "Expanded Inputs & Outputs", text: "Use up to six configurable input lines and four outputs for comprehensive monitoring and equipment control." },
  { icon: icons.can, title: "CAN & Dual CAN Integration", text: "Read vehicle and auxiliary-equipment data from one or two independent CAN buses on supported models." },
  { icon: icons.wired, title: "Complete Wired Connectivity", text: "Integrate compatible equipment through RS-232, RS-485, Modbus RTU and 1-Wire, depending on the model." },
  { icon: icons.antenna, title: "External GNSS & Cellular Antennas", text: "Position antennas away from interference or outside shielded areas for dependable reception in complex installations." },
  { icon: icons.microSd, title: "Expandable Telemetry Storage", text: "Add a microSD card up to 32 GB, with at least two million telemetry records available per gigabyte." },
  { icon: icons.customLogic, title: "Custom Logic & Edge Automation", text: "Run custom algorithms directly on supported SIGNAL devices and react even when the server connection is unavailable." },
];

export const signalModels = [
  { name: "S-2613", network: "2G", generation: "2g", badge: "External antennas", battery: "800 mAh battery", inputs: "5 inputs · 4 outputs", interface: "RS-485 · BLE 4.0", memory: "51,500 records" },
  { name: "S-2651", network: "2G · Dual SIM", generation: "2g", badge: "CAN integration", battery: "800 mAh battery", inputs: "6 universal inputs · 4 outputs", interface: "CAN · RS-232 · RS-485", memory: "51,500 records · microSD" },
  { name: "S-2653", network: "2G · Dual SIM", generation: "2g", badge: "Dual CAN", battery: "800 mAh battery", inputs: "6 universal inputs · 4 outputs", interface: "Dual CAN · RS-485 · 1-Wire", memory: "51,500 records · microSD" },
  { name: "S-4751", network: "4G / 2G · Dual SIM", generation: "4g", badge: "CAN · 4G", battery: "800 mAh battery", inputs: "6 universal inputs · 4 outputs", interface: "CAN · RS-232 · RS-485", memory: "100,000 records · microSD" },
  { name: "S-4753", network: "4G / 2G · Dual SIM", generation: "4g", badge: "Dual CAN · 4G", battery: "800 mAh battery", inputs: "6 universal inputs · 4 outputs", interface: "Dual CAN · RS-485 · 1-Wire", memory: "100,000 records · microSD" },
];

export const signalStrengths = [
  { icon: icons.usb, title: "Setup without vehicle power", text: "Configure, diagnose and update the tracker from a computer over USB without an external power supply" },
  { icon: icons.network, title: "Remote fleet operations", text: "Use DRC for remote configuration, diagnostics, firmware updates and group tasks across deployed devices" },
  { icon: icons.protection, title: "Protected vehicle installation", text: "Operate from 9.5 to 47 V with input-line surge protection up to 200 V" },
  { icon: icons.battery, title: "Built for long service", text: "A field-proven platform designed for dependable operation throughout long fleet deployments" },
];

