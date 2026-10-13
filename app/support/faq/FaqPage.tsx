"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  type LucideIcon,
  ArrowDown,
  ArrowRight,
  Bluetooth,
  ChevronDown,
  CircleHelp,
  CloudCog,
  Code2,
  Cpu,
  Bug,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  Headphones,
  Mail,
  MapPin,
  ListChecks,
  Lightbulb,
  Radio,
  Satellite,
  Search,
  Settings2,
  ShieldCheck,
  Signal,
  CardSim,
  TerminalSquare,
  Usb,
  Wrench,
  X,
} from "lucide-react";
import "./faq-page.css";

const categories = ["All", "General", "Diagnostics", "Integration", "Installation", "Hardware", "Warranty", "Technology"];

const faqItems: FaqItemData[] = [
  {
    category: "General",
    icon: Download,
    question: "Where can I download NTC Configurator?",
    search: "download latest NTC Configurator Windows macOS Linux software",
    answer: <><p>NTC Configurator is available for Windows, macOS and Linux. Open the official download section and select the version for your operating system</p><div className="fq-platform-links"><a href="https://wiki.navtelecom.ru/en/home/ntc_configurator#downloads">Windows <Download size={15} /></a><a href="https://wiki.navtelecom.ru/en/home/ntc_configurator#downloads">macOS <Download size={15} /></a><a href="https://wiki.navtelecom.ru/en/home/ntc_configurator#downloads">Linux <Download size={15} /></a></div></>,
  },
  {
    category: "General",
    icon: CloudCog,
    question: "How can I manage devices remotely?",
    search: "remote management SMS commands RCS DRC cloud configuration firmware",
    answer: <div className="fq-answer-options">
      <article><TerminalSquare /><div><strong>SMS Commands</strong><p>Send direct commands for APN, server settings, status and reboot</p><a href="https://wiki.navtelecom.ru/en/home/devices/commands">Full command list <ExternalLink size={15} /></a></div></article>
      <article><Settings2 /><div><strong>NTC Configurator through RCS</strong><p>Connect to an online device, read or write configuration and update firmware</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/remote_configurator">How it works <ExternalLink size={15} /></a></div></article>
      <article><CloudCog /><div><strong>DRC Cloud Service</strong><p>Use remote updates, configuration sync, diagnostics and device health monitoring</p><a href="https://wiki.navtelecom.ru/en/home/drc">Learn more <ExternalLink size={15} /></a></div></article>
    </div>,
  },
  {
    category: "General",
    icon: CloudCog,
    question: "Should I enable automatic firmware updates?",
    search: "automatic firmware updates DRC recommended latest features improvements performance stability tested releases",
    answer: <><p>Yes. We recommend enabling automatic firmware updates through DRC</p><p>Navtelecom firmware releases are thoroughly tested before publication. Automatic updates keep devices on the current supported version and provide the latest functionality, compatibility updates, stability improvements and performance optimizations without requiring each device to be updated manually</p><p className="fq-answer-note">Manage automatic firmware updates in DRC and make sure the device can connect to the service to receive the new version</p><a href="https://wiki.navtelecom.ru/en/home/drc">Open the DRC documentation <ExternalLink size={16} /></a></>,
  },
  {
    category: "General",
    icon: TerminalSquare,
    question: "Where can I find SMS and GPRS commands?",
    search: "SMS GPRS commands combined command technical support",
    answer: <><p>The complete SMS and GPRS command reference is available in the Navtelecom Wiki</p><a href="https://wiki.navtelecom.ru/en/home/devices/commands">Open the command list <ExternalLink size={16} /></a><p>For a complex combined command, contact <a className="fq-inline-link" href="mailto:support@navtelecom.ru">support@navtelecom.ru</a></p></>,
  },
  {
    category: "Integration",
    icon: Code2,
    question: "How can I integrate Navtelecom devices with my platform?",
    search: "integration FLEX protocol platform developer documentation examples",
    answer: <><p>Navtelecom devices support integration using the FLEX protocol. We provide protocol documentation, integration examples and developer support</p><a href="https://wiki.navtelecom.ru/en/home/developers">Developer documentation <ExternalLink size={16} /></a></>,
  },
  {
    category: "Integration",
    icon: Code2,
    question: "Do Navtelecom devices support MQTT?",
    search: "MQTT protocol broker publish subscribe IoT integration support",
    answer: <p>No. Navtelecom devices do not currently support the MQTT protocol</p>,
  },
  {
    category: "Integration",
    icon: Bluetooth,
    question: "Can I connect a custom BLE sensor to a Navtelecom tracker?",
    search: "custom Bluetooth BLE sensor protocol parameters configure integration advertisement manufacturer data",
    answer: <><p>Yes. A compatible custom BLE sensor can be integrated with a supported Navtelecom tracker</p><p>The sensor communication protocol is required to identify its data format and configure the parameters that the tracker must receive and transmit. Integration availability also depends on the tracker model, firmware and BLE capabilities of the sensor</p><p className="fq-answer-note">Prepare the sensor protocol specification before starting the configuration or integration work</p></>,
  },
  {
    category: "Integration",
    icon: Code2,
    question: "How can I connect equipment that is not already integrated with Navtelecom devices?",
    search: "unsupported custom equipment sensor integrate Transparent Mode RS-232 RS-485 protocol Complex Events",
    answer: <><p>There are two possible integration approaches</p><ul><li><strong>Transparent Mode:</strong> connect the equipment to a supported RS-232 or RS-485 interface and transfer its data transparently without decoding it inside the tracker</li><li><strong>Custom integration:</strong> when the equipment protocol is available, its commands, responses and data processing can be implemented using Complex Events</li></ul><p>The selected approach depends on the equipment protocol, electrical interface, required parameters and capabilities of the tracker model</p></>,
  },
  {
    category: "Integration",
    icon: Radio,
    question: "Where can I check supported vehicles for CAN decoding?",
    search: "supported vehicles CAN decoding files car library",
    answer: <><p>The current list of supported vehicles and available CAN decoding files is published in DRC</p><a href="https://drc.navtelecom.ru/public-can-decoding-files">Open supported vehicles list <ExternalLink size={16} /></a></>,
  },
  {
    category: "Integration",
    icon: Radio,
    question: "How many active CAN requests can a Navtelecom device send?",
    search: "active CAN mode request limit 16 messages responses parameters polling",
    answer: <><p>A Navtelecom device can send up to 16 active CAN requests</p><p>This is a limit on outgoing requests, not on the number of parameters that can be received. A single request may produce several response messages, and each response can contain multiple parameters for decoding</p><p className="fq-answer-note">The final amount of available data depends on the vehicle protocol, response structure and decoding file</p></>,
  },
  {
    category: "Diagnostics",
    icon: Radio,
    question: "Why is there no data from the CAN bus?",
    search: "no CAN data CAN High CAN Low voltage multimeter analog input baud rate Auto Detect passive decoding file protocol",
    answer: <><ol className="diagnostic-steps"><li><strong>Check the wiring and voltage</strong><p>Connect CAN High to CAN High and CAN Low to CAN Low. With the vehicle electronics active, measure each line relative to vehicle ground. Both lines are typically close to 2.5 V when the bus is recessive. During communication, CAN High rises toward approximately 3.5 V and CAN Low falls toward approximately 1.5 V, so a multimeter may show an averaged value within these ranges</p><p>If a multimeter is unavailable, a device input configured as an analog input can be used temporarily to check the line voltage. Disable voltage averaging so changes are not smoothed out</p></li><li><strong>Check for raw CAN traffic</strong><p>Enable the CAN interface and use Passive mode for the initial test. Open CAN Spy, select the CAN interface of the connected device and run Auto Detect to identify the baud rate. You can also select the baud rate manually and click Start</p><p>When the connection is correct, captured messages appear in the Messages table. If the baud rate is detected but only about five messages or fewer are visible, try another CAN connection point. If no baud rate is detected, recheck or swap CAN High and CAN Low and verify that the selected twisted pair is actually a supported CAN bus</p></li><li><strong>Configure decoded data transmission</strong><p>After raw messages are visible, select the correct decoding file in CAN Spy and write it to the device. Then open the device configuration and enable transmission of the required decoded parameters on the Data Transfer tab before writing the configuration to the device</p></li></ol><a href="https://wiki.navtelecom.ru/en/home/can_spy/examples/test_connection">Open the CAN connection diagnostics guide <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: Gauge,
    question: "Why does a START S-2011, S-2012 or S-2013 not show external voltage?",
    search: "START S-2011 S-2012 S-2013 external supply voltage AIN3 Ug red brown black wire voltage sensor analog",
    answer: <><p>These models cannot measure the external supply voltage directly through the Ug+ power contact. The AIN3 analog input must be used as the voltage sensor</p><ol className="diagnostic-steps"><li><strong>Connect the power and measurement wires</strong><p>Connect the red Ug+ wire and the brown AIN3 wire together to the positive terminal of the power source. Connect the black GND wire to the negative terminal or ground</p></li><li><strong>Enable external voltage measurement</strong><p>In NTC Configurator, open <strong>System Settings</strong> and set <strong>Use AIN3 as voltage sensor</strong> to <strong>On</strong></p></li><li><strong>Configure AIN3</strong><p>On the <strong>Inputs</strong> tab, set <strong>AIN3</strong> to <strong>Use as: analog</strong></p></li></ol><p>After the configuration is written to the device, the voltage measured on AIN3 is transmitted to the monitoring server as the External voltage parameter</p><a href="https://wiki.navtelecom.ru/en/home/devices/notes/no_cpu_1#external-voltage">Open the model-specific Wiki note <ExternalLink size={16} /></a></>,
  },
  {
    category: "Integration",
    icon: Code2,
    question: "Do Navtelecom devices support Modbus?",
    search: "Modbus registers read write 32 parameters Complex Events supported models",
    answer: <><p>Some Navtelecom device models support equipment that communicates over Modbus</p><ul><li>The standard firmware can read up to 32 Modbus parameters</li><li>Writing data to Modbus registers can be implemented with Complex Events</li></ul><p className="fq-answer-note">Modbus availability depends on the device model and its supported interfaces</p></>,
  },
  {
    category: "Installation",
    icon: MapPin,
    question: "How should the tracker be positioned during installation?",
    search: "tracker position label upward GNSS antenna satellite signal GPS GSM indicators",
    answer: <><p>Install the tracker with the label side facing upward. The side with the SYS, GPS and GSM indicators must face upward because the GNSS antenna is located in the upper part of the device</p><p>Incorrect orientation may reduce satellite signal quality and positioning accuracy</p></>,
  },
  {
    category: "Installation",
    icon: Wrench,
    question: "How can I verify that the device is installed and configured correctly?",
    search: "verify installation telemetry GSM GNSS satellites coordinates CAN sensors protocol settings wiring",
    answer: <><p>Open Telemetry Data in NTC Configurator and check the GSM signal level, GNSS satellites and coordinates, CAN data when connected and values from connected sensors</p><p>If the parameters update, the installation and configuration are working correctly. If data is missing, check Protocol Settings, wiring, installation position and device configuration</p></>,
  },
  {
    category: "Installation",
    icon: Usb,
    question: "Do I need external power to configure a Navtelecom device?",
    search: "external power USB laptop computer configure firmware update tracker supply",
    answer: <><p>No external power supply is required for configuration and service work</p><p>Connect the device to a laptop or computer with a USB cable. The device is powered through USB, allowing you to configure it, update its firmware and perform diagnostics without connecting it to the vehicle power supply</p></>,
  },
  {
    category: "Installation",
    icon: ShieldCheck,
    question: "Can I wrap or enclose the device during installation?",
    search: "plastic bag wrap foil metal box enclosure ventilation heat dissipation internal GNSS GSM cellular antenna installation",
    answer: <><p>No. Do not wrap the device in a plastic bag, foil or other covering</p><ul><li><strong>Plastic packaging</strong> restricts ventilation and heat dissipation</li><li><strong>Foil and metal enclosures</strong> shield internal GNSS and cellular antennas and can reduce or completely block reception</li></ul><p>Install the device in a dry, well-ventilated location with clear space around its enclosure. For models with internal antennas, keep it away from large metal surfaces and do not place it inside a closed metal container</p></>,
  },
  {
    category: "Installation",
    icon: MapPin,
    question: "Where should a Navtelecom tracker be installed?",
    search: "installation location dry ventilated protected accessible service driver moving parts heat moisture",
    answer: <><p>Install the tracker in a dry, well-ventilated and protected location inside the vehicle or equipment</p><p>The device should remain accessible for service but must not interfere with the driver, controls or moving mechanisms. Keep it away from water, direct heat, strong vibration and large metal surfaces that can affect internal antennas</p></>,
  },
  {
    category: "Installation",
    icon: Wrench,
    question: "How should the tracker be secured inside the vehicle?",
    search: "secure mount tracker vehicle vibration movement cable ties screws bracket fixed installation",
    answer: <><p>Secure the tracker so it cannot move, strike surrounding components or change its orientation while the vehicle is operating</p><p>Use the mounting method specified for the device and make sure the enclosure and wiring are not under mechanical stress. Do not leave the tracker loose among cables or other equipment</p></>,
  },
  {
    category: "Installation",
    icon: Wrench,
    question: "How should power and ground be connected?",
    search: "power ground GND vehicle battery stable supply voltage connection oxidized painted chassis",
    answer: <><p>Connect the tracker to a stable power circuit within the operating voltage range specified for the device</p><p>Connect GND to a reliable vehicle ground or directly to the negative terminal of the power source. The contact point must be clean and secure. Avoid painted, corroded or mechanically unstable grounding points</p><p className="fq-answer-note">Always follow the connection diagram for the exact device model</p></>,
  },
  {
    category: "Installation",
    icon: ShieldCheck,
    question: "Is a fuse required when installing the tracker?",
    search: "fuse required tracker installation power cable protection short circuit rating close supply point",
    answer: <><p>Yes. The tracker power line must be protected with a fuse of the rating specified in the connection diagram</p><p>Install the fuse as close as practical to the point where power is taken from the vehicle. This protects the wiring and device if a short circuit occurs</p></>,
  },
  {
    category: "Installation",
    icon: Wrench,
    question: "How should tracker wiring be routed and protected?",
    search: "route protect tracker wiring sharp edges heat moving parts vibration moisture cable ties insulation loom",
    answer: <><p>Route and secure the wiring so it cannot rub against sharp edges, contact hot components or enter moving mechanisms</p><ul><li>Protect cables with suitable insulation or conduit where necessary</li><li>Secure the harness without crushing or sharply bending the wires</li><li>Keep connections insulated and protected from moisture</li><li>Leave enough service length to disconnect and inspect the device safely</li></ul></>,
  },
  {
    category: "Installation",
    icon: ShieldCheck,
    question: "Can the tracker be installed near an airbag?",
    search: "airbag deployment zone tracker wiring installation safety restraint SRS dashboard pillar",
    answer: <><p>No. The tracker, antennas and wiring must not be installed inside an airbag deployment area or where they could obstruct a restraint system</p><p>Check the vehicle manufacturer's guidance before routing cables through the dashboard, pillars or seats. The installation must not interfere with airbags, seat-belt components or vehicle controls</p></>,
  },
  {
    category: "Installation",
    icon: ListChecks,
    question: "What should I test before completing the installation?",
    search: "final installation test power GSM cellular GNSS satellites coordinates CAN sensors telemetry server configuration",
    answer: <><p>Before concealing the wiring or completing the installation, verify the complete data path</p><ul><li>Stable power and correct external voltage</li><li>Cellular network registration and server connection</li><li>GNSS satellite reception and valid coordinates</li><li>Ignition, inputs, connected sensors and CAN parameters</li><li>Telemetry delivery to the monitoring platform</li></ul><p>Save the final configuration after all required parameters update correctly</p></>,
  },
  {
    category: "Installation",
    icon: Gauge,
    question: "How can I prevent the tracker from discharging the vehicle battery?",
    search: "vehicle battery discharge tracker current consumption energy saving sleep parking transmission interval",
    answer: <><p>Configure the device's energy-saving behavior for the way the vehicle is used, especially when it may remain parked for long periods</p><p>Review transmission intervals, parking behavior, connected sensors and any functions that keep the device active. After installation, verify current consumption in the relevant operating and sleep modes</p><p className="fq-answer-note">Available power-saving settings and consumption values depend on the device model and firmware</p></>,
  },
  {
    category: "Hardware",
    icon: Bluetooth,
    question: "How can I improve Bluetooth signal when using BLE sensors?",
    search: "Bluetooth BLE sensor signal metal antenna front device indicator wiring",
    answer: <><p>Keep the front side of the device clear of metal surfaces. The Bluetooth antenna is located near the indicator area</p><ul><li>Avoid placing the front side against metal surfaces</li><li>Keep space between the device and large wiring bundles</li><li>Point the front side toward the area where BLE sensors are located</li></ul></>,
  },
  {
    category: "Hardware",
    icon: Bluetooth,
    question: "How many Bluetooth fuel level sensors can I connect?",
    search: "maximum Bluetooth BLE wireless fuel level sensors FLS four 4",
    answer: <><p>You can connect up to four compatible Bluetooth fuel level sensors to a supported Navtelecom device</p><p className="fq-answer-note">Bluetooth availability and supported sensor models depend on the tracker model and firmware</p></>,
  },
  {
    category: "Hardware",
    icon: Radio,
    question: "How many wired fuel level sensors can I connect?",
    search: "maximum wired fuel level sensors FLS RS-232 RS-485 one six sixteen 1 6 16 model",
    answer: <><ul><li><strong>RS-232:</strong> one compatible wired fuel level sensor</li><li><strong>RS-485:</strong> up to 6 or up to 16 compatible fuel level sensors, depending on the Navtelecom device model</li></ul><p className="fq-answer-note">Check the interface specifications and maximum supported sensor count for the exact tracker model before planning the installation</p></>,
  },
  {
    category: "Hardware",
    icon: Radio,
    question: "When should I choose a tracker with external antennas?",
    search: "external GSM GNSS antenna weak signal metal compartment heavy machinery shielding",
    answer: <><p>Choose external antennas when the tracker must be installed in an area with weak reception, including metal compartments, heavy machinery or vehicles with substantial metal shielding</p><p>External GSM and GNSS antennas can be placed where signal reception is stronger, improving communication reliability and positioning accuracy</p></>,
  },
  {
    category: "Hardware",
    icon: Cpu,
    question: "What voltage range do Navtelecom trackers support?",
    search: "voltage input range 9.5 47 V electric vehicles low voltage 12 24 high voltage",
    answer: <><p>Navtelecom trackers support an input voltage range of 9.5 to 47 V for passenger cars, trucks and industrial equipment</p><p>In electric vehicles, connect the tracker only to the low-voltage auxiliary system, typically 12 V or 24 V. Never connect telematics devices to the high-voltage traction circuit</p></>,
  },
  {
    category: "Hardware",
    icon: CardSim,
    question: "Do I need to open the device to install a SIM or microSD card?",
    search: "SIM card microSD SD external slot open enclosure replace install",
    answer: <><p>No. The SIM card slot and, on models equipped with storage, the microSD card slot are accessible from the outside</p><p>You can install or replace the cards without opening the device enclosure</p></>,
  },
  {
    category: "Hardware",
    icon: ShieldCheck,
    question: "What ingress protection rating do Navtelecom devices have?",
    search: "IP54 dust water moisture splash ingress protection rating enclosure",
    answer: <><p>Navtelecom devices have an IP54 ingress protection rating</p><p>The enclosure is protected against dust entering in quantities that could interfere with operation and against water splashes from any direction. IP54 does not mean that the device can be submerged in water</p></>,
  },
  {
    category: "Hardware",
    icon: Gauge,
    question: "What is the backup battery used for?",
    search: "backup battery reserve power external supply disconnected event tracker operating time",
    answer: <><p>The backup battery provides temporary power when the main external supply is disconnected</p><p>It allows a supported device to register the power-loss event, continue operating for a limited time and transmit data when communication remains available. It is not intended to replace the vehicle power supply</p><p className="fq-answer-note">Battery availability, capacity, charging conditions and operating time depend on the device model and configuration</p></>,
  },
  {
    category: "Hardware",
    icon: Radio,
    question: "What is the difference between RS-232 and RS-485?",
    search: "RS-232 RS-485 full duplex half duplex serial interface wiring sensors communication simultaneous transmit receive",
    answer: <><p><strong>RS-232</strong> uses separate transmit and receive lines and operates in full-duplex mode, so data can be transmitted and received at the same time. It is normally used for a direct point-to-point connection with one compatible device</p><p><strong>RS-485</strong> on Navtelecom devices uses a shared two-wire bus in half-duplex mode. Devices take turns transmitting and receiving, but several addressable sensors can share the same bus</p><p>The difference affects wiring, bus topology and communication timing. Use the interface and connection diagram specified for the connected equipment</p></>,
  },
  {
    category: "Hardware",
    icon: Settings2,
    question: "Can one input line be used in different operating modes?",
    search: "fixed configurable universal input line frequency pulse counter analog digital profile device model",
    answer: <><p>It depends on the device model. Some trackers have input lines with fixed functions, while other models provide universal lines that can be reconfigured</p><p>A supported universal input can be assigned as an analog input, a discrete input, a frequency input or a pulse counter. Available profiles, voltage ranges and activation thresholds depend on the hardware</p><p className="fq-answer-note">Check the wiring diagram and input settings for the exact model before connecting a signal</p></>,
  },
  {
    category: "Hardware",
    icon: Gauge,
    question: "What is the difference between analog and digital inputs?",
    search: "analog digital input voltage measurement on off state threshold sensor ignition",
    answer: <><p>An analog input measures a changing voltage and can be used with compatible sensors or for voltage monitoring</p><p>A digital input detects defined On and Off states according to configured voltage thresholds. It can be used for signals such as ignition, doors, buttons and other equipment with discrete states</p></>,
  },
  {
    category: "Hardware",
    icon: Cpu,
    question: "What can the digital outputs be used for?",
    search: "digital output relay indicator actuator immobilizer external equipment maximum current load",
    answer: <><p>Digital outputs can control compatible external circuits such as a relay, indicator or another low-current control input</p><p>Always check the output type, maximum voltage and permitted current for the exact device model. Use an external relay or driver when the controlled load exceeds the output rating</p></>,
  },
  {
    category: "Hardware",
    icon: Cpu,
    question: "Can a tracker output power directly to external equipment?",
    search: "tracker output power external equipment sensor actuator digital output relay current load supply",
    answer: <><p>A digital output is primarily a control signal and must not be treated as a general-purpose power supply</p><p>Low-current compatible inputs may be controlled directly when they remain within the output specification. Equipment that requires more current must use its own power connection and an appropriate relay or driver controlled by the tracker</p></>,
  },
  {
    category: "Hardware",
    icon: ListChecks,
    question: "How much telemetry can the internal memory store?",
    search: "internal memory telemetry archive capacity records storage interval parameters black box",
    answer: <><p>The available archive depends on the device model, memory capacity and record size</p><p>More transmitted parameters and shorter recording intervals create larger records and use the available memory faster. The device configuration should balance reporting detail, recording frequency and the expected duration without cellular coverage</p><p className="fq-answer-note">Refer to the specification of the exact model for its memory capacity and archive limits</p></>,
  },
  {
    category: "Hardware",
    icon: ShieldCheck,
    question: "Do Navtelecom devices have reverse-polarity and overvoltage protection?",
    search: "reverse polarity overvoltage surge protection power input voltage hardware rating device model",
    answer: <><p>Navtelecom trackers include power-input protection appropriate to their hardware design, but the available protection functions and maximum ratings depend on the model</p><p>Protection does not replace correct wiring, a suitable fuse or operation within the specified supply-voltage range. Check the model specification before installation</p></>,
  },
  {
    category: "Hardware",
    icon: Satellite,
    question: "What is the difference between internal and external antennas?",
    search: "internal external GNSS GPS GSM cellular antennas installation metal enclosure signal reception",
    answer: <><p>Internal antennas simplify installation because no separate antenna or cable is required, but the tracker must be positioned correctly and kept clear of metal shielding</p><p>External antennas can be installed in a better reception area when the tracker itself must be hidden inside a metal compartment or another location with weak GNSS or cellular signal</p></>,
  },
  {
    category: "Hardware",
    icon: Signal,
    question: "Can the GNSS, cellular and Bluetooth antennas interfere with each other?",
    search: "GNSS GPS cellular GSM LTE Bluetooth antenna interference coexistence metal shielding radio noise placement",
    answer: <><p>The antennas and radio modules are designed to operate together under normal installation conditions</p><p>Reception problems are more commonly caused by metal shielding, incorrect orientation, damaged antenna cables or nearby high-power electrical and radio equipment. Follow the model-specific antenna placement requirements and keep the device away from strong interference sources</p></>,
  },
  {
    category: "Hardware",
    icon: Settings2,
    question: "Does the device have a real-time clock backup?",
    search: "real time clock RTC backup time power off battery GNSS NTP synchronization model",
    answer: <><p>Clock implementation and backup capability depend on the device model</p><p>Supported devices can maintain or restore accurate time using their available hardware, GNSS data and configured network time synchronization. Check the model specification when time retention after complete power loss is important</p></>,
  },
  {
    category: "Hardware",
    icon: FileText,
    question: "How can I identify the exact hardware version of a device?",
    search: "identify hardware version model IMEI label NTC Configurator device information firmware documentation wiring",
    answer: <><p>Check the model and identification information on the device label, then open Device Information in NTC Configurator to confirm the detected model, IMEI and available hardware and firmware details</p><p>Use the exact identification when selecting firmware, wiring diagrams and technical documentation. Devices with similar names may have different interfaces or hardware revisions</p></>,
  },
  {
    category: "Warranty",
    icon: ShieldCheck,
    question: "How long is the warranty on Navtelecom devices?",
    search: "warranty duration 3 year battery RTC 1 year",
    answer: <><p>Navtelecom devices are covered by a 3-year limited warranty. The backup battery and RTC battery are covered for 1 year</p><a href="https://navtelecom-iot.com/support/warranty">Review full warranty terms <ArrowRight size={16} /></a></>,
  },
  {
    category: "Technology",
    icon: Satellite,
    question: "What is multi-GNSS and why does it matter?",
    search: "multi GNSS GPS GLONASS Galileo BeiDou satellite constellations positioning availability reliability",
    answer: <><p>Multi-GNSS receivers can use signals from several satellite navigation systems, including GPS, GLONASS, Galileo and BeiDou</p><p>Access to more satellites improves availability and helps the device maintain a stable position in difficult environments such as dense urban areas. The exact set of supported constellations depends on the device model</p></>,
  },
  {
    category: "Technology",
    icon: MapPin,
    question: "What affects GNSS positioning accuracy?",
    search: "GNSS GPS positioning accuracy satellites HDOP antenna metal buildings tunnels interference installation",
    answer: <><p>Positioning accuracy depends on satellite visibility, satellite geometry, signal reflections, interference and antenna placement</p><ul><li>Buildings, tunnels, roofs and metal surfaces can block or reflect satellite signals</li><li>Incorrect device orientation can reduce the performance of an internal antenna</li><li>Low satellite count and high HDOP usually indicate less reliable positioning conditions</li></ul><p>Install the device according to its mounting recommendations and keep the GNSS antenna area clear of metal obstacles</p></>,
  },
  {
    category: "Technology",
    icon: Gauge,
    question: "What is HDOP and how should it be interpreted?",
    search: "HDOP horizontal dilution of precision satellite geometry GNSS GPS accuracy value low high",
    answer: <><p>HDOP means Horizontal Dilution of Precision. It describes how the geometry of the visible satellites may affect the horizontal position calculation</p><p>A lower HDOP value generally represents more favorable satellite geometry. A higher value indicates that the calculated position may be less reliable</p><p className="fq-answer-note">HDOP is a quality indicator, not a direct measurement of error in meters</p></>,
  },
  {
    category: "Technology",
    icon: Signal,
    question: "What happens when a tracker loses cellular coverage?",
    search: "cellular GSM LTE coverage lost offline black box internal memory stored telemetry resend connection restored",
    answer: <><p>The tracker continues collecting telemetry and stores unsent records in its internal memory</p><p>When the cellular connection is restored, the device sends the accumulated records to the monitoring server in chronological order. Storage capacity and transmission behavior depend on the model and its configuration</p></>,
  },
  {
    category: "Technology",
    icon: ListChecks,
    question: "Do Navtelecom devices send stored telemetry in FIFO or LIFO order?",
    search: "FIFO LIFO telemetry archive stored messages chronological order single grouped batch latest current status",
    answer: <><p>Navtelecom devices use FIFO, or First In, First Out, for stored telemetry. The oldest archived record is transmitted first, preserving the chronological order of events</p><p>The device can send records one by one or combine several records into a group, depending on its transmission settings. In grouped mode, archived records are sent in FIFO order and the group can also include the latest recorded message</p><p>This allows the monitoring server to receive the current device status while the older archive is still being uploaded</p><p className="fq-answer-note">The number of records in a group and the transmission behavior depend on the device configuration and protocol settings</p></>,
  },
  {
    category: "Technology",
    icon: Radio,
    question: "What is the difference between 2G and 4G tracking devices?",
    search: "2G 4G LTE Cat 1 cellular tracking devices network coverage operators data speed lifecycle GNSS accuracy",
    answer: <><p>The main difference is the cellular network technology used to transmit telemetry</p><ul><li><strong>2G</strong> offers broad coverage in countries where legacy networks remain available</li><li><strong>4G</strong> provides compatibility with modern mobile networks, higher data capacity and a longer expected network lifecycle in many regions</li></ul><p>Choose the version according to local operator coverage and network plans. The cellular generation does not determine GNSS positioning accuracy</p></>,
  },
  {
    category: "Technology",
    icon: Signal,
    question: "Do Navtelecom 4G devices support IPv6?",
    search: "4G LTE IPv4 IPv6 IP addressing network registration APN mobile operator dual stack",
    answer: <><p>Yes. Navtelecom 4G devices support registration and data communication using both IPv4 and IPv6 networks</p><p>The required IP type must also be supported by the SIM card, mobile operator and configured APN. Use the network settings provided by the operator when configuring the device</p></>,
  },
  {
    category: "Technology",
    icon: CardSim,
    question: "Do Navtelecom devices support MultiSIM cards?",
    search: "MultiSIM multi network roaming SIM card mobile operators APN cellular Navtelecom",
    answer: <><p>Yes. Navtelecom devices support operation with compatible MultiSIM cards</p><p>Configure the APN and authentication settings provided by the MultiSIM supplier. Available networks, roaming behavior and service access depend on the SIM provider, the cellular bands supported by the device and the coverage in the operating region</p></>,
  },
  {
    category: "Technology",
    icon: Bluetooth,
    question: "What is Bluetooth Low Energy and why is it used in telematics?",
    search: "Bluetooth Low Energy BLE telematics sensors fuel temperature humidity wireless low power",
    answer: <><p>Bluetooth Low Energy, or BLE, is a short-range wireless technology designed for low power consumption</p><p>In telematics it allows compatible fuel level, temperature, humidity and other sensors to exchange data with a tracker without additional signal wiring. Supported sensor types and limits depend on the device model</p></>,
  },
  {
    category: "Technology",
    icon: Radio,
    question: "What is the difference between active and passive CAN modes?",
    search: "active passive CAN bus mode listen traffic send requests responses vehicle diagnostics decoding",
    answer: <><p>In passive mode, the device only listens to messages already transmitted on the CAN bus. It does not send requests to the vehicle</p><p>In active mode, the device can send configured requests and process the corresponding responses. Active polling should use the correct identifiers, timing and protocol for the vehicle</p></>,
  },
  {
    category: "Technology",
    icon: Gauge,
    question: "How does a tracker detect ignition and engine operation?",
    search: "ignition engine running detection digital input voltage CAN RPM engine hours tracker",
    answer: <><p>A tracker can determine ignition or engine operation using one or more configured data sources</p><ul><li>A dedicated ignition input connected to the vehicle circuit</li><li>The external supply voltage level</li><li>Decoded CAN parameters such as engine speed or ignition status</li></ul><p>The available methods depend on the device model, wiring and configuration. The selected source should match the actual installation</p></>,
  },
  {
    category: "Technology",
    icon: Cpu,
    question: "How does motion detection work in a telematics device?",
    search: "motion detection accelerometer movement parking impact harsh acceleration tracker sensor thresholds",
    answer: <><p>A built-in accelerometer measures changes in movement and acceleration. The device can use this information to identify motion, parking, impacts and other driving events</p><p>Detection thresholds and the events produced from accelerometer data depend on the model, firmware and device configuration</p></>,
  },
  {
    category: "Technology",
    icon: ShieldCheck,
    question: "What is GNSS spoofing and how is it different from jamming?",
    search: "GNSS GPS spoofing jamming interference false coordinates signal blocked detection",
    answer: <><p><strong>Jamming</strong> uses radio interference to weaken or block satellite signals, which can prevent the receiver from calculating a position</p><p><strong>Spoofing</strong> transmits misleading navigation signals intended to produce an incorrect position or time</p><p className="fq-answer-note">Detection capabilities depend on the device model and configuration</p></>,
  },
  {
    category: "Technology",
    icon: Settings2,
    question: "Why does a tracker need accurate time synchronization?",
    search: "time synchronization GNSS NTP timestamp telemetry events logs stored data chronological",
    answer: <><p>Accurate time keeps telemetry records, events and diagnostic logs in the correct sequence</p><p>A tracker can obtain time from GNSS and, when configured, synchronize through network services such as NTP. Reliable timestamps are especially important when data is stored offline and transmitted later</p></>,
  },
  {
    category: "Technology",
    icon: Code2,
    question: "What is the FLEX protocol?",
    search: "FLEX protocol Navtelecom telemetry integration coordinates device status sensors parameters monitoring server",
    answer: <><p>FLEX is the Navtelecom telemetry protocol used to transmit data from tracking devices to monitoring platforms</p><p>It can carry coordinates, movement data, device status, sensor values, CAN parameters and other configured information. Platform developers can use the protocol documentation to implement direct device integration</p><a href="https://wiki.navtelecom.ru/en/home/developers">Open the developer documentation <ExternalLink size={16} /></a></>,
  },
  {
    category: "Technology",
    icon: Gauge,
    question: "What is the difference between GPS and GNSS?",
    search: "GPS GNSS GLONASS Galileo BeiDou QZSS NavIC navigation constellation",
    answer: <><p>GPS is a satellite navigation system developed by the United States. GNSS is the general term for all satellite navigation systems, including GPS, GLONASS, Galileo, BeiDou, QZSS and NavIC</p><p>Navtelecom devices use multi-GNSS receivers that can work with several constellations simultaneously to improve positioning reliability</p></>,
  },
  {
    category: "Technology",
    icon: MapPin,
    question: "How accurate is GPS tracking?",
    search: "GPS GNSS accuracy 2 5 meters satellites urban buildings tunnel antenna",
    answer: <><p>Under normal conditions, GNSS positioning accuracy is typically 2 to 5 meters</p><p>Accuracy depends on satellite visibility, buildings, tunnels, installation position and antenna placement. Correct installation significantly improves the result</p></>,
  },
  {
    category: "General",
    icon: Headphones,
    question: "What information should I send to Technical Support?",
    search: "support request device model IMEI firmware configuration file logs issue description",
    answer: <><p>Include the device model and IMEI, firmware version, NTC Configurator version, configuration file and a short description of the issue</p><p>When available, attach diagnostic logs and explain what was expected and what actually happened</p><a href="mailto:support@navtelecom.ru">Email Technical Support <Mail size={16} /></a></>,
  },
  {
    category: "General",
    icon: FileText,
    question: "Where can I find manuals, wiring diagrams and firmware?",
    search: "manual wiring diagram firmware model documentation device wiki",
    answer: <><p>Open the device section in the Navtelecom Wiki and select the exact model. Each model page groups specifications, wiring, manuals, firmware and configuration resources</p><a href="https://wiki.navtelecom.ru/en/home/devices">Browse device documentation <ExternalLink size={16} /></a></>,
  },
  {
    category: "Installation",
    icon: Wrench,
    question: "What should I check if a device stops sending data?",
    search: "offline no data not sending power SIM cellular GSM server protocol telemetry diagnostics",
    answer: <><p>Check device power, SIM card status, cellular signal and the configured server address and port</p><p>Open Telemetry Data in NTC Configurator to confirm that the modem is registered and parameters are updating. If the problem remains, save the configuration and diagnostic logs before contacting Technical Support</p></>,
  },
  {
    category: "Diagnostics",
    icon: Lightbulb,
    question: "What do the LED indicators on a Navtelecom device mean?",
    search: "LED indication SYS GSM NAV status flashes device cellular navigation",
    answer: <><p>The LED pattern shows the current device, cellular network and navigation status. Use the LED reference to identify the meaning of each indicator and flash sequence</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/leds">Open the LED indications guide <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: CloudCog,
    question: "How can I connect to a device remotely in NTC Configurator?",
    search: "remote connection RCS NTC Configurator online device connect",
    answer: <><p>Use the remote connection workflow to access an online device from NTC Configurator through RCS. The guide explains the connection requirements and procedure</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/remote_configurator">Open the remote connection guide <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: CloudCog,
    question: "Why can’t my device connect to DRC or RCS?",
    search: "cannot connect DRC RCS remote service SIM card provider whitelist IP DNS address APN firewall",
    answer: <><p>If the SIM card uses restricted network access, the DRC and RCS service IP addresses or DNS names must be included in the mobile provider's whitelist</p><p>Ask the SIM card provider to allow access to the required destinations. To receive the current IP addresses and DNS names for whitelisting, contact Navtelecom Technical Support</p><a href="mailto:support@navtelecom.ru">Email support@navtelecom.ru <Mail size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: Bug,
    question: "How do I record a debug log from a device?",
    search: "record debug log GSM GNSS GPS RS-232 RS-485 digital interfaces diagnostics",
    answer: <><p>Record a debug log when Technical Support needs detailed data from the GSM modem, GNSS receiver or RS-232 and RS-485 interfaces</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/debug_logs">Open the debug log instructions <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: Satellite,
    question: "How can I diagnose GNSS reception and positioning issues?",
    search: "GNSS GPS navigation diagnostics satellites coordinates positioning signal antenna",
    answer: <><p>Use the GNSS diagnostics guide when coordinates are missing, unstable or inaccurate. It provides recommendations for checking reception and positioning problems</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/navigation">Open the GNSS diagnostics guide <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: Signal,
    question: "How can I diagnose cellular network connection issues?",
    search: "cellular GSM GPRS LTE network diagnostics SIM signal operator registration server connection",
    answer: <><p>Use the cellular network diagnostics guide when a device cannot register on the network, establish a data session or connect reliably</p><a href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/gsm">Open the cellular diagnostics guide <ExternalLink size={16} /></a></>,
  },
  {
    category: "Diagnostics",
    icon: Signal,
    question: "Can Navtelecom devices detect GNSS and cellular jamming?",
    search: "GNSS GPS GSM cellular jamming interference detection anti-jamming configuration setting model",
    answer: <><p>Selected Navtelecom models can detect interference or jamming affecting GNSS reception and GSM or cellular communication</p><p>Availability depends on the device model, and the relevant detection setting must be enabled in the device configuration. Check the specification for the exact model and configure transmission of the required jamming status parameters</p></>,
  },
  {
    category: "Diagnostics",
    icon: ListChecks,
    question: "Where can I find the Navtelecom event codes table?",
    search: "event code event_code reference table FLEX parameter diagnostic code",
    answer: <><p>The event codes reference explains the values reported in the <code>event_code</code> parameter and can be used when analyzing telemetry and device events</p><a href="https://wiki.navtelecom.ru/en/home/developers/event_codes">Open the event codes table <ExternalLink size={16} /></a></>,
  },
];

function FaqVisual() {
  return (
    <div className="fq-faq-visual" aria-hidden="true">
      <span className="fq-visual-ring fq-ring-one" />
      <span className="fq-visual-ring fq-ring-two" />
      <div className="fq-visual-core"><CircleHelp size={64} strokeWidth={1.35} /><small>NAVTELECOM SUPPORT</small><strong>Find the answer</strong></div>
      <div className="fq-visual-node fq-node-device"><Cpu /><span>Devices</span></div>
      <div className="fq-visual-node fq-node-software"><Settings2 /><span>Software</span></div>
      <div className="fq-visual-node fq-node-install"><Wrench /><span>Installation</span></div>
      <div className="fq-visual-node fq-node-integration"><Code2 /><span>Integration</span></div>
    </div>
  );
}

type FaqItemData = { category: string; icon: LucideIcon; question: string; search: string; answer: React.ReactNode };

function FaqItem({ item, index }: { item: FaqItemData; index: number }) {
  const Icon = item.icon;

  return (
    <details className="fq-faq-item" style={{ "--delay": `${Math.min(index, 5) * 45}ms` } as React.CSSProperties}>
      <summary>
        <span className="fq-question-icon"><Icon size={21} /></span>
        <span className="fq-question-copy"><small>{item.category}</small><strong>{item.question}</strong></span>
        <span className="fq-toggle-icon"><ChevronDown size={21} /></span>
      </summary>
      <div className="fq-answer">{item.answer}</div>
    </details>
  );
}

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = root.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("fq-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = !needle || `${item.question} ${item.category} ${item.search}`.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const showResults = () => {
    document.getElementById("faq-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="faq-page" ref={rootRef} id="top">
      <main>
        <section className="fq-hero">
          <div className="fq-shell fq-hero-grid">
            <div className="fq-hero-copy" data-reveal>
              <p className="fq-eyebrow">NAVTELECOM FAQ</p>
              <h1>Technical answers in one place</h1>
              <p className="fq-hero-lead">Browse practical guidance for devices, software, installation, integration and technical support</p>
              <form className="fq-hero-search-form" onSubmit={(event) => { event.preventDefault(); showResults(); }}>
                <label className="fq-hero-search">
                  <Search size={22} />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions, products or topics" aria-label="Search frequently asked questions" />
                  {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={18} /></button>}
                </label>
                <div className="fq-search-actions">
                  <p className="fq-search-meta" aria-live="polite">{query.trim() ? `${filtered.length} ${filtered.length === 1 ? "answer" : "answers"} found` : `Search across ${faqItems.length} verified answers`}</p>
                  {query.trim() && <button className="fq-view-results" type="submit">View results <ArrowDown size={17} /></button>}
                </div>
              </form>
            </div>
            <FaqVisual />
          </div>
        </section>

        <section className="fq-faq-section" id="questions">
          <div className="fq-shell">
            <div className="fq-section-heading" data-reveal>
              <p className="fq-eyebrow">BROWSE BY TOPIC</p>
              <h2>Frequently asked questions</h2>
              <p>Select a category or search for a specific task</p>
            </div>

            <div className="fq-category-bar" role="tablist" aria-label="FAQ categories">
              {categories.map((name) => {
                const count = name === "All" ? faqItems.length : faqItems.filter((item) => item.category === name).length;
                return <button key={name} className={category === name ? "fq-active" : undefined} onClick={() => setCategory(name)} role="tab" aria-selected={category === name}>{name}<span>{count}</span></button>;
              })}
            </div>

            <div className="fq-results-row" id="faq-results">
              <div><span>{filtered.length} {filtered.length === 1 ? "answer" : "answers"}</span></div>
              {(query || category !== "All") && <button onClick={() => { setQuery(""); setCategory("All"); }}>Reset filters <X size={15} /></button>}
            </div>

            {filtered.length > 0 ? (
              <div className="fq-faq-list">{filtered.map((item, index) => <FaqItem item={item} index={index} key={item.question} />)}</div>
            ) : (
              <div className="fq-empty-state" data-reveal><Search size={30} /><h3>No matching answers</h3><p>Try another phrase or browse all categories</p><button onClick={() => { setQuery(""); setCategory("All"); }}>Show all questions</button></div>
            )}
          </div>
        </section>

        <section className="fq-support-cta">
          <div className="fq-shell fq-cta-card" data-reveal>
            <span className="fq-cta-icon"><Headphones size={32} /></span>
            <div><p className="fq-eyebrow">STILL HAVE QUESTIONS?</p><h2>Talk to Technical Support</h2><p>Send the device model, firmware version and a short description of the issue so our team can help faster</p></div>
            <a className="fq-cta-button" href="mailto:support@navtelecom.ru">support@navtelecom.ru <Mail size={18} /></a>
          </div>
        </section>
      </main>
    </div>
  );
}
