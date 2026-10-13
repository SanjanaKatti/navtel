# Important Considerations for Devices Based on the SIM868E Module | NTC Wiki

Source: https://wiki.navtelecom.ru/en/home/devices/notes/no_cpu_1

Unlike other models, devices `S-261x`, `S-241x` и `S-201x` **do not have a built-in microcontroller**. The program (firmware) of the device is executed in the chipset of the SIM868E module with Embedded AT technology of SIMCOM. In this regard, these devices have a number of important features and limitations.

# External Voltage

In these models **it is not possible to measure the external power voltage** on the `Ug+` (power) contact. This is because the SIM868E module has only one ADC for voltage measurement, which is used to monitor the voltage on the external input `AIN3`.

Therefore, to monitor the external power, it is necessary to use the analog input `AIN3`. What should be done:

- Connect `AIN3` to `Ug+`

- On the [System Settings](https://wiki.navtelecom.ru/en/home/ntc_configurator/help/system) tab tick: **Use AIN3 as voltage sensor** = `On` (After selecting this setting, the voltage measured by the `AIN3` input will be additionally transmitted to the monitoring server in the External voltage parameter.)

- On the [Inputs](https://wiki.navtelecom.ru/en/home/ntc_configurator/help/inputs) tab for the `AIN3` set: **Use as** = `analog`

# Drivers

Since these models use a new type of drivers, required one may not be available when you connect device to computer for the first time.

- [Driver installation Guide with recommendations for installing drivers and troubleshooting possible installation problems](https://wiki.navtelecom.ru/en/home/ntc_configurator/driver)

# Turn-on Time

One of the features of these models is the **longer turn-on time**, it also manifests itself in the form of a **longer connection to the configurator**. If it usually takes about 2 seconds to turn on the device, then in these models this time can reach `10 seconds`.

# Internal Voltage

> This information is relevant only for the models with a backup battery.

In this kind of devices **there is no full-fledged function to measure backup battery voltage**.

However, the SIM868E module has possibility to measure the power voltage of the module itself. The module power voltage is transmitted as System power parameter (Internal voltage parameter is used for transmission to the monitoring server). If there is no external power on the main device connector and when the USB connector is disconnected, the system power voltage will be equal to the voltage on the backup battery.
