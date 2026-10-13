export type FeatureIcon =
  | "inputs"
  | "rs"
  | "ble"
  | "onewire"
  | "compact"
  | "usb"
  | "engine"
  | "can"
  | "gnss"
  | "battery"
  | "memory"
  | "microsd"
  | "cell"
  | "sim"
  | "shield"
  | "antenna"
  | "driver";

export type Capability = {
  title: string;
  desc: string;
  icon: FeatureIcon;
  sub?: string;
};

export type SoftwareLink = {
  title: string;
  desc: string;
  cta: string;
  href: string;
};

export type ModelSection = {
  capabilities: Capability[];
  software: SoftwareLink[];
};

const inputs = "Reliable. Clear control.";
const wired = "Wired. Reliable. Universal.";
const wiredPrecise = "Wired. Reliable. Precise.";
const wireless = "Wireless. Effortless.";
const connected = "Simple. Accurate. Connected.";
const compactSub = "Install anywhere. Stay invisible.";
const usbSub = "Fast setup. Flexible use.";
const engineSub = "Smart logic. Clear insights.";
const canSub = "Vehicle data. No delay.";

const cap = (
  title: string,
  desc: string,
  icon: FeatureIcon,
  sub?: string,
): Capability => ({ title, desc, icon, sub });

const inputs5out1 = cap(
  "5 Inputs & 1 Output",
  "Monitor four digital signals plus one analog input configurable as digital, and control a connected relay or other compatible equipment.",
  "inputs",
  inputs,
);
const inputs3out1 = cap(
  "3 Inputs & 1 Output",
  "Monitor two digital signals plus one analog input configurable as digital, and control a connected relay or other compatible equipment.",
  "inputs",
  inputs,
);
const inputs5out2 = cap(
  "5 Inputs & 2 Outputs",
  "Monitor four digital signals plus one analog input configurable as digital, and control two connected relays or other compatible devices.",
  "inputs",
  inputs,
);
const universal3 = cap(
  "3 Universal Inputs & 2 Outputs",
  "Connect digital, analog, pulse, frequency or RPM signals and control connected relays, sirens, buzzers or other compatible equipment.",
  "inputs",
  inputs,
);
const inputs5out4 = cap(
  "5 Inputs & 4 Outputs",
  "Monitor four digital signals plus one analog input configurable as digital, and control up to four connected relays or other compatible devices.",
  "inputs",
  inputs,
);
const universal6 = cap(
  "6 Universal Inputs & 4 Outputs",
  "Connect digital, analog, pulse, frequency or RPM signals and control up to four connected relays or other compatible devices.",
  "inputs",
  inputs,
);

const compact = cap(
  "Ultra-Compact Design",
  "The 65.5 x 38.4 x 14.3 mm enclosure enables discreet installation behind dashboard panels and in other tight spaces.",
  "compact",
  compactSub,
);
const ble40Four = cap(
  "Bluetooth 4.0 Sensor Support",
  "Connect up to four supported Bluetooth 4.0 sensors for fuel, temperature and other telemetry.",
  "ble",
  wireless,
);
const ble40Fuel = cap(
  "Bluetooth 4.0 Sensor Support",
  "Connect supported wireless fuel, temperature and other sensors without additional signal wiring.",
  "ble",
  wireless,
);
const ble50 = cap(
  "Bluetooth 5.0 Sensor Support",
  "Connect compatible wireless sensors and accessories without additional signal wiring.",
  "ble",
  wireless,
);
const ble40Sensors = cap(
  "Bluetooth 4.0 Sensor Support",
  "Connect supported wireless sensors without additional signal wiring.",
  "ble",
  wireless,
);
const gnssNamed = cap(
  "Multi-GNSS Positioning",
  "Use GPS, GLONASS and BeiDou signals for reliable vehicle positioning.",
  "gnss",
);
const gnssMulti = cap(
  "Multi-GNSS Positioning",
  "Use multiple satellite navigation systems for reliable vehicle positioning.",
  "gnss",
);
const usb = cap(
  "USB Type-C Setup",
  "Configure, diagnose and exchange data locally through a modern USB Type-C connection.",
  "usb",
  usbSub,
);
const shield = cap(
  "Protected Vehicle Installation",
  "Operate from 9.5 to 47 V with input-line surge protection up to 200 V.",
  "shield",
);
const battery130 = cap(
  "Integrated Backup Battery",
  "Detect external power loss and maintain short-term operation with the built-in 130 mAh battery.",
  "battery",
);
const battery380 = cap(
  "Integrated Backup Battery",
  "Detect external power loss and maintain short-term operation with the built-in 380 mAh battery.",
  "battery",
);
const battery800Long = cap(
  "800 mAh Backup Battery",
  "Maintain longer autonomous operation and report external power interruptions.",
  "battery",
);
const battery800 = cap(
  "800 mAh Backup Battery",
  "Maintain autonomous operation and report external power interruptions.",
  "battery",
);
const rs485 = cap(
  "RS-485 Sensor Integration",
  "Connect compatible fuel-level and other industrial sensors over a reliable wired interface.",
  "rs",
  wired,
);
const rs485Precise = cap(
  "RS-485 Sensor Integration",
  "Connect compatible fuel-level and other industrial sensors over a reliable wired interface.",
  "rs",
  wiredPrecise,
);
const cell = cap(
  "4G Connectivity",
  "Transmit vehicle data over 4G networks with 2G fallback where supported.",
  "cell",
);
const cellSensor = cap(
  "4G Connectivity",
  "Transmit vehicle and sensor data over 4G networks with 2G fallback where supported.",
  "cell",
);
const cellSim = cap(
  "4G & Dual-SIM Connectivity",
  "Use modern 4G networks and two SIM cards to improve availability across different operators.",
  "cell",
);
const memory50 = cap(
  "50,000-Record Offline Memory",
  "Preserve telemetry during communication outages and transmit it when the connection is restored.",
  "memory",
);
const memory51500 = cap(
  "51,500-Record Offline Memory",
  "Preserve extended telemetry history during communication outages.",
  "memory",
);
const memory100 = cap(
  "100,000-Record Offline Memory",
  "Preserve extended telemetry history during communication outages.",
  "memory",
);
const onewireBle40 = cap(
  "1-Wire & Bluetooth 4.0",
  "Connect wired temperature and driver ID accessories plus supported wireless sensors.",
  "onewire",
  connected,
);
const onewireBle50 = cap(
  "1-Wire & Bluetooth 5.0",
  "Connect compatible temperature, driver ID and wireless sensors and accessories.",
  "onewire",
  connected,
);
const engine = cap(
  "Engine Hours & RPM",
  "Calculate operating time and engine speed from configurable input signals without a CAN connection.",
  "engine",
  engineSub,
);
const rs232 = cap(
  "RS-232, RS-485 & 1-Wire",
  "Integrate compatible fuel, temperature, driver ID and other wired peripherals.",
  "rs",
  wired,
);
const sim = cap(
  "Dual-SIM Connectivity",
  "Use two SIM cards to improve network availability across different operators.",
  "sim",
);
const interfaces40 = cap(
  "RS-232, RS-485, 1-Wire & Bluetooth 4.0",
  "Connect a broad range of compatible wired and wireless sensors and accessories.",
  "rs",
  wired,
);
const interfaces50 = cap(
  "RS-232, RS-485, 1-Wire & Bluetooth 5.0",
  "Connect a broad range of compatible wired and wireless sensors and accessories.",
  "rs",
  wired,
);
const driver = cap(
  "Driver Identification",
  "Identify drivers with compatible TouchMemory keys connected through the 1-Wire interface.",
  "driver",
  connected,
);
const can = cap(
  "CAN Vehicle Data",
  "Read supported fuel, RPM, mileage and other vehicle parameters directly from the CAN bus without an external CAN adapter.",
  "can",
  canSub,
);
const dualCan = cap(
  "Dual CAN Interface",
  "Connect to two independent CAN buses to collect data from the vehicle and auxiliary equipment.",
  "can",
  canSub,
);
const rsBle40 = cap(
  "RS-485, 1-Wire & Bluetooth 4.0",
  "Connect wired and wireless fuel, temperature, driver ID and other compatible sensors.",
  "rs",
  wired,
);
const rsBle50 = cap(
  "RS-485, 1-Wire & Bluetooth 5.0",
  "Connect wired and wireless fuel, temperature, driver ID and other compatible sensors.",
  "rs",
  wired,
);
const rsBle50Fuel = cap(
  "RS-485, 1-Wire & Bluetooth 5.0",
  "Connect compatible fuel, temperature, driver ID and wireless sensors and accessories.",
  "rs",
  wired,
);
const antennas = cap(
  "External GNSS & Cellular Antennas",
  "Place antennas away from tachographs and other interference sources, or outside shielded mounting areas, for more reliable positioning and cellular reception.",
  "antenna",
);
const storage51500 = cap(
  "Expandable Telemetry Storage",
  "Store 51,500 records internally and add a microSD card up to 32 GB, with at least 2 million records per GB.",
  "microsd",
);
const storage100 = cap(
  "Expandable Telemetry Storage",
  "Store 100,000 records internally and add a microSD card up to 32 GB, with at least 2 million records per GB.",
  "microsd",
);

const drc: SoftwareLink = {
  title: "DRC Bulk Management & FOTA",
  desc: "Configure and diagnose devices, update firmware and run group tasks remotely across the fleet.",
  cta: "Explore DRC",
  href: "/products/software-solutions/drc",
};
const complexEvents: SoftwareLink = {
  title: "Complex Events",
  desc: "Create custom logic that runs directly on the device and reacts in real time, even when the server connection is unavailable.",
  cta: "Explore Complex Events",
  href: "/products/software-solutions/complex-events",
};
const canSpy: SoftwareLink = {
  title: "CAN Spy",
  desc: "Scan, identify and analyze vehicle CAN data to simplify integration and diagnostics.",
  cta: "Explore CAN Spy",
  href: "/products/software-solutions/can-spy",
};

const drcOnly = [drc];
const drcEvents = [drc, complexEvents];
const drcEventsCan = [drc, complexEvents, canSpy];

export const modelSections: Record<string, ModelSection> = {
  "S-2010": {
    capabilities: [inputs5out1, compact, ble40Four, gnssNamed, usb, shield],
    software: drcOnly,
  },
  "S-2011": {
    capabilities: [inputs5out1, battery130, compact, ble40Four, gnssNamed, usb],
    software: drcOnly,
  },
  "S-2013": {
    capabilities: [
      inputs3out1,
      rs485Precise,
      battery130,
      compact,
      ble40Fuel,
      gnssNamed,
    ],
    software: drcOnly,
  },
  "S-4011": {
    capabilities: [cell, inputs5out1, battery130, compact, ble50, memory50],
    software: drcEvents,
  },
  "S-4013": {
    capabilities: [
      cellSensor,
      inputs3out1,
      rs485,
      battery130,
      compact,
      memory50,
    ],
    software: drcEvents,
  },
  "S-2421": {
    capabilities: [universal3, onewireBle40, engine, battery380, gnssNamed, shield],
    software: drcOnly,
  },
  "S-2425": {
    capabilities: [universal3, rs232, sim, ble40Sensors, battery380, gnssNamed],
    software: drcOnly,
  },
  "S-2433": {
    capabilities: [
      universal3,
      interfaces40,
      battery800Long,
      shield,
      driver,
      gnssMulti,
    ],
    software: drcEvents,
  },
  "S-2435": {
    capabilities: [
      universal3,
      can,
      interfaces40,
      sim,
      memory51500,
      battery800Long,
    ],
    software: drcEventsCan,
  },
  "S-2437": {
    capabilities: [
      universal3,
      dualCan,
      rsBle40,
      sim,
      memory51500,
      battery800Long,
    ],
    software: drcEventsCan,
  },
  "S-4511": {
    capabilities: [
      cell,
      inputs5out2,
      onewireBle50,
      battery380,
      memory50,
      gnssMulti,
    ],
    software: drcEvents,
  },
  "S-4513": {
    capabilities: [
      cellSim,
      inputs5out2,
      rsBle50Fuel,
      battery380,
      memory50,
      gnssMulti,
    ],
    software: drcEvents,
  },
  "S-4533": {
    capabilities: [
      cellSim,
      universal3,
      interfaces50,
      memory100,
      battery800Long,
      gnssMulti,
    ],
    software: drcEvents,
  },
  "S-4535": {
    capabilities: [
      cellSim,
      universal3,
      can,
      interfaces50,
      memory100,
      battery800Long,
    ],
    software: drcEventsCan,
  },
  "S-4537": {
    capabilities: [
      cellSim,
      universal3,
      dualCan,
      rsBle50,
      memory100,
      battery800Long,
    ],
    software: drcEventsCan,
  },
  "S-2613": {
    capabilities: [inputs5out4, rs485, antennas, memory51500, battery800, shield],
    software: drcOnly,
  },
  "S-2651": {
    capabilities: [
      universal6,
      can,
      interfaces40,
      storage51500,
      antennas,
      sim,
    ],
    software: drcEventsCan,
  },
  "S-2653": {
    capabilities: [universal6, dualCan, rsBle40, storage51500, antennas, sim],
    software: drcEventsCan,
  },
  "S-4751": {
    capabilities: [
      cellSim,
      universal6,
      can,
      interfaces50,
      storage100,
      antennas,
    ],
    software: drcEventsCan,
  },
  "S-4753": {
    capabilities: [
      cellSim,
      universal6,
      dualCan,
      rsBle50,
      storage100,
      antennas,
    ],
    software: drcEventsCan,
  },
};
