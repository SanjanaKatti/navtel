# START S-201x. Specifications. | NTC Wiki

Source: https://wiki.navtelecom.ru/en/home/devices/characteristics/s201x

Note: This table is for START S-2010, S-2011 and S-2013 only. S-2012 is not a current product.

# Key Specifications

| | **2010** | **2011** | **2013** |
| --- | --- | --- | --- |
| **Communications** | | | |
| Modem type / Cellular network generation | 2G | 2G | 2G |
| GSM frequency bands (2G) | GSM 850, EGSM 900 DCS 1800, PCS 1900 | GSM 850, EGSM 900 DCS 1800, PCS 1900 | GSM 850, EGSM 900 DCS 1800, PCS 1900 |
| GPRS class | B, multislot class 12 | B, multislot class 12 | B, multislot class 12 |
| Transmitter power | Class 4 (2 W) in GSM 850 and EGSM 900 Class 1 (1 W) in DCS 1800 and PCS 1900 | Class 4 (2 W) in GSM 850 and EGSM 900 Class 1 (1 W) in DCS 1800 and PCS 1900 | Class 4 (2 W) in GSM 850 and EGSM 900 Class 1 (1 W) in DCS 1800 and PCS 1900 |
| Maximum uplink/downlink data rate (GPRS/EDGE) | GPRS: 85.6 Kbps EDGE: 236.8 Kbps | GPRS: 85.6 Kbps EDGE: 236.8 Kbps | GPRS: 85.6 Kbps EDGE: 236.8 Kbps |
| IP stack protocols | TCP, UDP | TCP, UDP | TCP, UDP |
| Number of SIM cards used | 1 | 1 | 1 |
| Type of SIM cards used | nano-SIM | nano-SIM | nano-SIM |
| SIM chip installation option | No | No | No |
| **Navigation** | | | |
| Supported navigation systems | GLONASS/GPS/Beidou | GLONASS/GPS/Beidou | GLONASS/GPS/Beidou |
| Operating frequency range of the system, MHz | GPS: L1 (1563,42-1587,42) GLONASS: L1 (1598,0625-1605,375) BEIDOU: B1 (1559,052-1591,788) | GPS: L1 (1563,42-1587,42) GLONASS: L1 (1598,0625-1605,375) BEIDOU: B1 (1559,052-1591,788) | GPS: L1 (1563,42-1587,42) GLONASS: L1 (1598,0625-1605,375) BEIDOU: B1 (1559,052-1591,788) |
| Coordinate system | WGS-84 | WGS-84 | WGS-84 |
| Number of navigation module channels | tracking: 33, acquisition: 99 | tracking: 33, acquisition: 99 | tracking: 33, acquisition: 99 |
| Sensitivity (in laboratory conditions) | tracking: -167 dBm cold start: -149 dBm | tracking: -167 dBm cold start: -149 dBm | tracking: -167 dBm cold start: -149 dBm |
| Time to First Fix (TTFF) (for GPS and GLONASS systems with a signal of -130 dBm) | cold start: 29 s warm start: 22 s hot start: <1 sec | cold start: 29 s warm start: 22 s hot start: <1 sec | cold start: 29 s warm start: 22 s hot start: <1 sec |
| Position accuracy (50% CEP, 24 hours in static mode, at signal levels -130 dBm), m | horizontal: 2.5 altitude: 5 | horizontal: 2.5 altitude: 5 | horizontal: 2.5 altitude: 5 |
| Speed accuracy, no more than (50%CEP at speed over 30m/s), m/s | 0,1 | 0,1 | 0,1 |
| Coordinate update frequency, Hz | 1 | 1 | 1 |
| **Power supply** | | | |
| Operating supply voltage, V | 9,5...47 | 9,5...47 | 9,5...47 |
| Measuring the voltage of the on-board network when connecting only the “+” and “-” power lines to the device | No | No | No |
| Power supply reverse polarity protection | Yes | Yes | Yes |
| Protection against long-term overvoltage | Yes up to 200 V | Yes up to 200 V | Yes up to 200 V |
| Current consumption at a voltage of 12 V in operating mode, mA (average value) | 75 | 75 | 75 |
| Current consumption at a voltage of 12 V with GLONASS and GSM modules turned off, no more than, mA | 25 | 25 | 25 |
| Maximum current consumption at a voltage of 12 V in operating mode, no more than mA | 200 | 200 | 200 |
| Built-in battery | No | Type: Li-Po Voltage: 3.7V Capacity: 130 mAh | Type: Li-Po Voltage: 3.7V Capacity: 130 mAh |
| Charging the built-in battery via USB | No | Yes | Yes |
| Availability of built-in battery protection against overcharge, complete discharge, short circuit | No | Yes | Yes |
| Continuous operating time on a fully charged built-in battery, with GSM/UMTS data transmission once per minute, at least, h | No | 1 | 1 |
| Time to fully charge the built-in battery is no more than hours | No | 2 | 2 |
| Availability of a backup battery for the navigation module | Yes | Yes | Yes |
| Ephemeris storage time in the navigation module (with power off and built-in battery discharged), no less than 24 hours | 5 | 5 | 5 |
| RTC crystal oscillator | No | No | No |
| RTC clock retention time (with power off and built-in battery discharged), at least 24 hours | No | No | No |
| **Input lines** | | | |
| Protection of input lines from power surges | Yes | Yes | Yes |
| Total number of input lines | 5 | 5 | 3 |
| From the total quantity can be used as discrete ones by "+" | 2 | 2 | 2 |
| From the total quantity can be used as discrete ones by "-" (built-in PULL UP) | 3 | 3 | 1 |
| Of the total quantity can be used as analog | 1 | 1 | 1 |
| From the total quantity can be used as pulse-frequency | No | No | No |
| Discrete-input activation voltage at "+" more than, V | 5,2 (+/-0,2) | 5,2 (+/-0,2) | 5,2 (+/-0,2) |
| Discrete-input activation voltage at "-" less than, V | 0,9 (+/-0,2) | 0,9 (+/-0,2) | 0,9 (+/-0,2) |
| Measuring range for analog lines, V | 0…31 | 0…31 | 0…31 |
| Measuring range for frequency lines, Hz | No | No | No |
| **Output lines** | | | |
| Number of control output lines | 1 | 1 | 1 |
| Maximum switching current of output control lines, mA | 500 | 500 | 500 |
| Maximum switching voltage of output control lines, V | 48 | 48 | 48 |
| **Interfaces** | | | |
| USB interface | Yes | Yes | Yes |
| CAN interface | No | No | No |
| Digital interface RS-485 | No | No | Yes |
| Digital interface RS-232 | No | No | No |
| 1-Wire interface | No | No | No |
| Bluetooth | Yes (v4.0) | Yes (v4.0) | Yes (v4.0) |
| **System modules** | | | |
| Volume of non-volatile memory, MB | 4 | 4 | 4 |
| Number of records in non-volatile memory (circular buffer type) when the telematic recording packet size is less than 127 bytes | 25000 | 25000 | 25000 |
| Period of data recording in the internal storage device, s | 1 — 3600 and/or upon an event | 1 — 3600 and/or upon an event | 1 — 3600 and/or upon an event |
| Supports microSD cards with memory capacity up to 32 GB | No | No | No |
| Number of telemetry records on microSD card | No | No | No |
| Accelerometer with configurable low-impact, high-impact, motion, and tilt detection | Yes | Yes | Yes |
| Range of acceleration measurement by the device, not less than, g | +/- 8 | +/- 8 | +/- 8 |
| **Setup and management** | | | |
| Availability of a USB interface for settings, control and data transfer | Yes | Yes | Yes |
| Ability to configure and manage the device using the NTC Configurator configuration program | Yes | Yes | Yes |
| Ability to configure and control the device via Bluetooth using the NTC Control mobile application | Yes | Yes | Yes |
| Support for working in the DRC tracker remote control system | Yes | Yes | Yes |
| Ability to update firmware and change settings via the Internet | Yes | Yes | Yes |
| Availability of automatic firmware update function | Yes | Yes | Yes |
| Ability to manage and change settings via SMS and Internet channels | Yes | Yes | Yes |
| Ability to send telemetry data to the server repeatedly via SMS or GPRS command for a period | Yes | Yes | Yes |
| Output of user and debug logs from the GSM modem, GPS receiver and interfaces) | Yes | Yes | Yes |
| **Performance characteristics** | | | |
| Storage temperature with built-in battery, *C | No | 0 … +40 | 0 … +40 |
| Storage temperature without built-in battery, *C | -40 … +85 | -40 … +85 | -40 … +85 |
| Operating temperature with built-in battery, *C | No | -20 … +60 | -20 … +60 |
| Operating temperature without built-in battery, *C | -40 … +85 | -40 … +85 | -40 … +85 |
| Temperature at which the built-in battery can be charged, *C | No | 0 … +50 | 0 … +50 |
| Maximum permissible humidity at 35*C, % | 95 | 95 | 95 |
| Maximum permissible overload during impacts, g | 24 | 24 | 24 |
| **Design features of the device** | | | |
| GLONASS/GPS and GSM antennas | built-in | built-in | built-in |
| Connector for connecting to a computer | USB Type-C | USB Type-C | USB Type-C |
| Connectors for connecting external GLONASS/GPS and GSM antennas | No | No | No |
| Interface connectors | wiring harness | wiring harness | wiring harness |
| SIM card holder 1 | external with ejector nano-SIM | external with ejector nano-SIM | external with ejector nano-SIM |
| SIM card holder 2 | No | No | No |
| Tamper sensor | No | No | No |
| Housing material | black ABS plastic | black ABS plastic | black ABS plastic |
| Ingress protection rating | IP54 | IP54 | IP54 |
| Overall dimensions of the system unit with connectors, mm | 65,5x38,4x14,3 | 65,5x38,4x14,3 | 65,5x38,4x14,3 |
| Weight of the system unit, kg | 0,031 | 0,035 | 0,035 |

## Notes

**The manufacturer reserves the right to change product characteristics for improvement without prior notice.**

- When the maximum operating voltage is exceeded, power protection is triggered. In this case, the device continues to operate, but power is supplied from the built-in battery, if available.

- When operating via GPRS in poor communication conditions, the peak (~10ms) consumption of the device can exceed 500 mA.

- **ATTENTION!**If the device uses a Li-Po battery, then during its operation the following rules must be observed: do not heat it, keep it away from heat sources, do not throw the battery into fire, do not expose it to direct sunlight. The device, which is powered by a lithium-polymer (Li-Po) battery, should not be used in conditions of high humidity or at high or low ambient temperatures. Operation is permitted under the conditions established by the manufacturer. Do not impact, deform, disassemble, or short circuit.

- The battery protection function blocks the charge at low temperatures and at temperatures above +50 *C.

- When storing a device equipped with a built-in battery outside the temperatures specified in the "Operational Specifications" section, it is recommended to disconnect and remove the built-in battery from the device to avoid damage to the battery and the device. It is recommended to store the battery separately in a charged state at a temperature of 0 ... +40 *C.

- **ATTENTION!**When operating a device equipped with a built-in battery outside the temperatures specified in the “Operational Characteristics” section, there may be an irreversible change in the properties of the built-in Li-Po battery, a decrease in capacity, current output, etc.

# Functional characteristics

| | **2010** | **2011** | **2013** |
| --- | --- | --- | --- |
| **Function block "Data transfer"** | **Yes** | **Yes** | **Yes** |
| Automatic detection of operator settings based on SIM card registration data in the GSM network | Yes | Yes | Yes |
| Setting priority when working with multiple SIM cards | No | No | No |
| Setting the cellular network registration wait time | Yes | Yes | Yes |
| Number of servers (IP addresses) to which telemetry information can be simultaneously transmitted | 3 | 3 | 3 |
| Supports custom FLEX, FLEX 2.0 and FLEX 3.0 protocols | Yes | Yes | Yes |
| EGTS protocol support | Yes | Yes | Yes |
| Ability to transfer data in TCP and UDP | Yes | Yes | Yes |
| Ability to encrypt data using the AES128 standard when transmitting it to the server | Yes | Yes | Yes |
| Availability of settings for managing the sending of emergency messages and messages with the current state of the device | Yes | Yes | Yes |
| Ability to choose between continuous or periodic mode of operation with the monitoring server | Yes | Yes | Yes |
| The ability to send information while roaming only about the current state according to set timers while moving and parked, with subsequent uploading of all accumulated data to the home network | Yes | Yes | Yes |
| Ability to configure a list of priority operators in roaming | Yes | Yes | Yes |
| **Function block "Protocol settings"** | **Yes** | **Yes** | **Yes** |
| Possibility of optional selection of transmitted parameters to save traffic | Yes | Yes | Yes |
| LBS positioning using the three nearest cellular base stations | Yes | Yes | Yes |
| Availability of universal user parameters for sending arbitrary data | No | No | No |
| **Function block "Track settings"** | **Yes** | **Yes** | **Yes** |
| Algorithm for measuring real mileage taking into account the terrain | Yes | Yes | Yes |
| Possibility of generating track points based on course changes, distance traveled, time in motion and time parked | Yes | Yes | Yes |
| Function for limiting the frequency of recording track points according to the conditions of “distance” and “time” to save traffic | Yes | Yes | Yes |
| Function for rejecting coordinates based on conditions (number of satellites, HDOP, speed, acceleration) | Yes | Yes | Yes |
| Selecting sensors for coordinate averaging | Yes | Yes | Yes |
| Customizable stop detection mode | Yes | Yes | Yes |
| Ability to configure the navigation module to determine location (navigation systems used, cutoff angle) | Yes | Yes | Yes |
| **Function block "System settings"** | **Yes** | **Yes** | **Yes** |
| Ability to set passwords to access settings and control via SMS | Yes | Yes | Yes |
| Password-independent control phone number | Yes | Yes | Yes |
| Setting the time zone for the built-in calendar | Yes | Yes | Yes |
| Internet time synchronization function (NTP) | Yes | Yes | Yes |
| Setting the trigger level of the external power sensor | Yes (only when voltage is measured via the AIN3 input) | Yes (only when voltage is measured via the AIN3 input) | Yes (only when voltage is measured via the AIN3 input) |
| Determining the fact of engine operation and calculating engine hours based on the voltage level in the vehicle’s on-board network | Yes (only when voltage is measured via the AIN3 input) | Yes (only when voltage is measured via the AIN3 input) | Yes (only when voltage is measured via the AIN3 input) |
| Selecting sensors used to calculate engine hours | Yes | Yes | Yes |
| Availability of energy saving mode | Yes | Yes | Yes |
| Ability to stop working with fuel sensors under specified conditions (supply voltage drops below a threshold, ignition is turned off, engine is turned off) | Yes | Yes | Yes |
| Alert function when removing SIM card | No | No | No |
| Function of automatic control of the balance of the personal account of the main SIM card | No | No | No |
| Telemetry recording function on microSD card | No | No | No |
| Vehicle evacuation tracking function | No | No | No |
| Cellular Network Diagnostics Feature | Yes | Yes | Yes |
| **Function block "CAN bus"** | **No** | **No** | **No** |
| **Function block "RS-232 / RS-485"** | **No** | **No** | **Yes** |
| Possibility of simultaneous operation with two different devices on the digital interface (not all device combinations are allowed) | No | No | No |
| Ability to customize the degree of data averaging for FLS | No | No | Yes |
| Support for FLS using the LLS protocol | No | No | Yes |
| Number of connected FLS via RS-485 interface, no more | No | No | 6 |
| On-device fuel level sensor calibration | No | No | No |
| Support for the CAN-LOG CAN bus adapter | No | No | No |
| Support for the CANFMS CAN bus adapter | No | No | No |
| Support for the DTA-CAN CAN bus adapter | No | No | No |
| Support for the J1708 interface | No | No | No |
| Support for Pressure Pro tire pressure sensors | No | No | No |
| Support for Bridgestone B-Tag Tire Pressure Sensors | No | No | No |
| Support for tire pressure sensors TM508T22U | No | No | No |
| Support for Parkmaster TPMS 6-13 tire pressure sensors | No | No | No |
| Support for tire pressure sensors TD18, TD20, TD21 | No | No | No |
| Connecting an external high-precision navigation receiver | No | No | No |
| NMEA sentence output from the built-in navigation module to the digital interface | No | No | No |
| Support for refrigeration units via the iQFreeze adapter | No | No | No |
| Support for refrigeration units through the DataCold recorder | No | No | No |
| Transparent port function (data transfer from the interface to the server and back from the server to the interface) | No | No | No |
| Support for information boards (for the "Autoinformator" function) | No | No | No |
| Support for the driver display DV-01 | No | No | No |
| Support for the Omnicomm ICON driver display | No | No | No |
| Ability to display text messages received from the server or via SMS on the driver’s display | No | No | No |
| The ability to display information on the driver’s display about the amount of fuel in liters from the FLS | No | No | No |
| Support for ATOL tachograph | No | No | No |
| Support for the Mercury tachograph | No | No | No |
| Support for the SHTRICH tachograph | No | No | No |
| Support for the VDO Continental tachograph | No | No | No |
| Sending events when the tachograph state changes | No | No | No |
| Modbus RTU protocol support | No | No | No |
| Support for RFID readers using the LLS protocol | No | No | No |
| Support for RFID reader Escort Radius | No | No | No |
| Support for RFID reader CPM-3303-01 | No | No | No |
| Support for RFID reader ADM20 | No | No | No |
| Support for passenger flow sensor PP-01 | No | No | No |
| Support for the passenger flow sensor "Autoconductor" | No | No | No |
| Support for the camera using the VC0706 protocol | No | No | No |
| Support for alcohol lock Alcogran AM-525 | No | No | No |
| Ability to transfer interface control to the Complex Events function | No | No | No |
| **Function block "Temperature sensors"** | **Yes** | **Yes** | **Yes** |
| Number of connected digital temperature sensors, no more | 4 | 4 | 4 |
| Interface for connecting digital temperature sensors | Bluetooth | Bluetooth | Bluetooth |
| Possibility of generating events based on temperature decrease/exceeding | Yes | Yes | Yes |
| Ability to control filtering of readings from temperature sensors | Yes | Yes | Yes |
| Possibility to disable zeroing of readings when communication with the sensor is lost | Yes | Yes | Yes |
| **Function block "Input lines"** | **Yes** | **Yes** | **Yes** |
| Number of inputs with Discrete function on "+" | 2 | 2 | 2 |
| Number of inputs with Discrete function by "-" | 3 | 3 | 1 |
| Number of inputs with Pulse counter function | No | No | No |
| Number of inputs with Frequency sensor function | No | No | No |
| Number of inputs with voltage measurement function | 1 | 1 | 1 |
| Number of inputs with Tachometer function | No | No | No |
| Ability to customize the degree of data averaging at frequency and voltage inputs | Yes | Yes | Yes |
| Configuring the case intrusion sensor | No | No | No |
| **Function block "Accelerometer"** | **Yes** | **Yes** | **Yes** |
| Availability of virtual shock, tilt and movement sensors | Yes | Yes | Yes |
| Availability of virtual vibration sensor | No | No | No |
| Accelerometer calibration function | No | No | No |
| Function for recording an accident event according to GOST or ASI accident severity index | No | No | No |
| Generating and sending an accident profile file to the server | No | No | No |
| **Function block "Output lines"** | **Yes** | **Yes** | **Yes** |
| Ability to change the state of the output line by command | Yes | Yes | Yes |
| Support for connecting a buzzer without a built-in generator | No | No | No |
| Function to indicate any detected identifier | No | No | No |
| Function to indicate a detected identifier that is included in the list of trusted identifiers | No | No | No |
| Function to remind the driver about the need to attach the ID to the reader | No | No | No |
| Immobilizer function using driver identification system using Proximity cards and 1-Wire interface | No | No | No |
| Siren control function when using security modes | No | No | No |
| Function of outputting signals from the built-in system LED or security mode indicator to the output line | No | No | No |
| Possibility of indicating the current operating mode of the "Autoinformer" function | No | No | No |
| Ability to control the MUTE signal for the "Autoinformer" function | No | No | No |
| Ability to control the MUTE signal when establishing a voice connection | No | No | No |
| Function for changing the state of the output line when moving through geofences | No | No | No |
| Power management function of the passenger flow sensor "Autoconductor" | No | No | No |
| Ability to change the state of output lines depending on the state of the device sensors | Yes | Yes | Yes |
| **Block of functions "Subscribers"** | **No** | **No** | **No** |
| **Function block "Autoinformer"** | **No** | **No** | **No** |
| **Function block "Camera"** | **No** | **No** | **No** |
| **Block of functions "Identifiers"** | **No** | **No** | **No** |
| **Block of functions "Security modes"** | **No** | **No** | **No** |
| **Function block "Eco Driving"** | **No** | **No** | **No** |
| **Bluetooth function block** | **Yes** | **Yes** | **Yes** |
| Support for connecting via Bluetooth diagnostic adapter ELM327 | No | No | No |
| Support for connecting a wireless headset for two-way communication with the driver | No | No | No |
| Number of connected BLE sensors, no more | 4 | 4 | 4 |
| Connecting a BLE fuel level sensor Escort TD | Yes | Yes | Yes |
| Connecting the BLE fuel level sensor GL-TV | Yes | Yes | Yes |
| Connecting the BLE fuel level sensor TECHNOTON DUT-E | Yes | Yes | Yes |
| Connecting the BLE fuel level sensor MECHATRONICS DOMINATOR | Yes | Yes | Yes |
| Connecting the BLE fuel level sensor MIELTA FANTOM | Yes | Yes | Yes |
| Connecting a BLE fuel level sensor ITALON BLE | Yes | Yes | Yes |
| Connecting BLE analog sensors ELA AI | Yes | Yes | Yes |
| Connecting BLE discrete sensors and counters ELA MAG | Yes | Yes | Yes |
| Connecting BLE discrete sensors and counters ELA MOV | Yes | Yes | Yes |
| Connecting BLE discrete sensors and ELA DI counters | Yes | Yes | Yes |
| Connecting BLE discrete sensors and ELA PIR counters | Yes | Yes | Yes |
| Connecting BLE temperature sensors ADM31 / ADM35 | Yes | Yes | Yes |
| Connecting BLE temperature sensors ESCORT TL | Yes | Yes | Yes |
| Connecting BLE temperature sensors TZ-BT04 | Yes | Yes | Yes |
| Connecting BLE temperature sensors ELA T / ELA RHT | Yes | Yes | Yes |
| Connecting BLE angle sensors ADM32 | Yes | Yes | Yes |
| Connecting BLE tilt angle sensors ESCORT DU | Yes | Yes | Yes |
| Connecting BLE angle sensors TECHNOTON GNOME DP | Yes | Yes | Yes |
| Connecting BLE tilt angle sensors MECHATRONICS DEGREE | Yes | Yes | Yes |
| Connecting BLE tilt angle sensors ELA MOV(ANG) | Yes | Yes | Yes |
| Connecting BLE axle load TECHNOTON GNOME DDE | Yes | Yes | Yes |
| BLE axle load connection MECHATRONICS DDS | Yes | Yes | Yes |
| BLE axle load connection MECHATRONICS DPS | Yes | Yes | Yes |
| Connecting BLE fuel consumption sensors TECHNOTON DFM | Yes | Yes | Yes |
| Connecting universal BLE sensors TESLiOT | Yes | Yes | Yes |
| Connecting universal BLE sensors ESCORT TH | Yes | Yes | Yes |
| Connecting universal BLE sensors Teltonica EYE | Yes | Yes | Yes |
| Connecting universal BLE sensors MECHATRONICS DTS | Yes | Yes | Yes |
| Connecting any wireless sensors with custom parameters analysis | Yes | Yes | Yes |
| **Function block "Complex Events"** | **No** | **No** | **No** |
