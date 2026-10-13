import type { SeriesConfig } from "./types";
import {
  startHeroFeatures, startFeatures, startModels, startStrengths,
  smartHeroFeatures, smartFeatures, smartModels, smartStrengths,
  signalHeroFeatures, signalFeatures, signalModels, signalStrengths,
} from "./seriesDataBlocks";

export const startSeries: SeriesConfig = {
  slug: "start",
  name: "START",
  deviceImage: "/tracking-devices/start.png",
  deviceLabel: "COMPACT GPS TRACKER",
  heroAriaLabel: "START Series tracker surrounded by key series capabilities",
  eyebrow: "COMPACT · PRACTICAL · COST-EFFECTIVE",
  headline: "Essential tracking without unnecessary complexity",
  lead: "Compact GPS trackers for vehicle location, fleet inputs and connected fuel or temperature sensors—available in 2G and 4G configurations",
  facts: [
    { icon: "server", value: "3 servers", label: "Simultaneous data delivery" },
    { icon: "gauge", value: "25K–50K", label: "Offline records" },
    { icon: "shield", value: "IP54", label: "Protection" },
    { icon: "badge", value: "3 years", label: "Manufacturer warranty" },
  ],
  heroFeatures: startHeroFeatures,
  capabilities: {
    title: "Everything essential for everyday fleet monitoring",
    text: "Choose only the connectivity and interfaces the project needs while keeping installation compact and straightforward",
  },
  features: startFeatures,
  lineupTitle: "Five devices for one compact platform",
  models: startModels,
  choice: {
    eyebrow: "CHOOSE BY CAPABILITY",
    title: "The same compact platform with room to grow",
    text: "Start with essential fleet tracking, then move to S-40xx when the project needs modern connectivity, more storage or deeper integration",
    linkLabel: "Compare all START models",
    linkHref: "/products/compare?devices=S-2010,S-2011,S-2013,S-4011,S-4013",
    columns: [
      {
        eyebrow: "ESSENTIAL FOUNDATION · 2G",
        title: "S-20xx",
        text: "Core START capabilities for established GSM networks",
        points: ["Compact tracking platform", "BLE sensor support", "25,000 offline records", "RS-485 limited to fuel-level sensors"],
      },
      {
        eyebrow: "EVERYTHING IN S-20xx · PLUS",
        title: "S-40xx",
        text: "Expanded connectivity, storage and on-device capabilities",
        points: ["4G connectivity with 2G fallback", "50,000 offline records", "Custom Logic support", "Unrestricted RS-485 for Modbus and custom protocols"],
      },
    ],
  },
  strengths: {
    eyebrow: "WHY START",
    title: "Designed for fast installation and dependable operation",
    items: startStrengths,
  },
  final: {
    title: "Find the right START tracker for your fleet",
    text: "Compare network support, battery, interfaces and memory across all five models",
    compareLabel: "Compare START models",
    compareHref: "/products/compare?devices=S-2010,S-2011,S-2013,S-4011,S-4013",
  },
};

export const smartSeries: SeriesConfig = {
  slug: "smart",
  name: "SMART",
  deviceImage: "/tracking-devices/smart.png",
  deviceLabel: "ADVANCED GPS TRACKER",
  heroAriaLabel: "SMART Series tracker surrounded by key series capabilities",
  eyebrow: "CONNECTED · FLEXIBLE · INTELLIGENT",
  headline: "Advanced telemetry for demanding fleet operations",
  lead: "Professional GPS trackers with configurable I/O, wired and wireless sensors, CAN options and on-device automation—available for 2G and 4G networks",
  facts: [
    { icon: "server", value: "3 servers", label: "Simultaneous data delivery" },
    { icon: "database", value: "Up to 100K", label: "Offline records" },
    { icon: "shield", value: "IP54", label: "Protection" },
    { icon: "badge", value: "3 years", label: "Manufacturer warranty" },
  ],
  heroFeatures: smartHeroFeatures,
  capabilities: {
    title: "One platform for tracking, sensors and vehicle data",
    text: "Build the exact telemetry system the project needs—from essential fleet monitoring to dual-CAN and industrial peripheral integration",
  },
  features: smartFeatures,
  lineupTitle: "Ten models, one scalable SMART platform",
  models: smartModels,
  choice: {
    eyebrow: "CHOOSE BY NETWORK GENERATION",
    title: "The same SMART logic, ready for the network you use",
    text: "Choose S-24xx for established 2G deployments or move to S-45xx for 4G connectivity, larger storage and the newest wireless generation",
    linkLabel: "Compare all SMART models",
    linkHref: "/products/all-devices",
    columns: [
      {
        eyebrow: "ESTABLISHED 2G PLATFORM",
        title: "S-24xx",
        text: "Flexible telemetry for regions with established GSM coverage",
        points: ["2G connectivity", "25,000–51,500 offline records", "Bluetooth 4.0 sensor support", "CAN and Dual CAN variants"],
      },
      {
        eyebrow: "MODERN GENERATION · 4G / 2G",
        title: "S-45xx",
        text: "Expanded capacity with modern cellular connectivity and fallback",
        points: ["4G connectivity with 2G fallback", "50,000–100,000 offline records", "Bluetooth 5.0 sensor support", "CAN and Dual CAN variants"],
      },
    ],
  },
  strengths: {
    eyebrow: "WHY SMART",
    title: "Engineered for serious integration and dependable operation",
    items: smartStrengths,
  },
  final: {
    title: "Find the right SMART tracker for your project",
    text: "Compare network support, interfaces, CAN options, battery and storage across all ten models",
    compareLabel: "Compare SMART models",
    compareHref: "/products/all-devices",
  },
};

export const signalSeries: SeriesConfig = {
  slug: "signal",
  name: "SIGNAL",
  deviceImage: "/tracking-devices/signal.png",
  deviceLabel: "PROFESSIONAL GPS TRACKER",
  heroAriaLabel: "SIGNAL Series tracker surrounded by professional series capabilities",
  eyebrow: "POWERFUL · EXPANDABLE · PROFESSIONAL",
  headline: "Maximum integration for complex transport systems",
  lead: "Professional GPS trackers with expanded I/O, external antennas, CAN options and scalable telemetry storage for fleets, public transport and industrial automation",
  facts: [
    { icon: "server", value: "3 servers", label: "Simultaneous data delivery" },
    { icon: "database", value: "Up to 32 GB", label: "Expandable microSD storage" },
    { icon: "shield", value: "IP54", label: "Protection" },
    { icon: "badge", value: "3 years", label: "Manufacturer warranty" },
  ],
  heroFeatures: signalHeroFeatures,
  capabilities: {
    title: "Built when ordinary telemetry is not enough",
    text: "Connect more vehicle systems, preserve more data and place antennas where demanding installations need them",
  },
  features: signalFeatures,
  lineupTitle: "Five devices for advanced integration",
  models: signalModels,
  choice: {
    eyebrow: "CHOOSE BY NETWORK GENERATION",
    title: "Professional SIGNAL capability, ready for 2G or 4G",
    text: "Choose S-26xx for established 2G deployments or move to S-47xx for 4G connectivity, larger internal memory and the newest wireless generation",
    linkLabel: "Compare all SIGNAL models",
    linkHref: "/products/all-devices",
    columns: [
      {
        eyebrow: "ESTABLISHED 2G PLATFORM",
        title: "S-26xx",
        text: "Professional telemetry for established GSM networks",
        points: ["2G connectivity", "Up to 51,500 internal records", "Bluetooth 4.0 sensor support", "CAN and Dual CAN options"],
      },
      {
        eyebrow: "MODERN GENERATION · 4G / 2G",
        title: "S-47xx",
        text: "Maximum SIGNAL capability with modern connectivity",
        points: ["4G connectivity with 2G fallback", "100,000 internal records", "Bluetooth 5.0 sensor support", "CAN and Dual CAN options"],
      },
    ],
  },
  strengths: {
    eyebrow: "WHY SIGNAL",
    title: "Designed for demanding installations and long service",
    items: signalStrengths,
  },
  final: {
    title: "Find the right SIGNAL tracker for your project",
    text: "Compare network support, CAN architecture, interfaces, control lines and storage across all five models",
    compareLabel: "Compare SIGNAL models",
    compareHref: "/products/all-devices",
  },
};
