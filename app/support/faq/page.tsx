import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContainer from "@/components/LayoutContainer";

const generalFaqs = [
  {
    q: "Where can I download the Configurator?",
    a: (
      <div className="space-y-3">
        <p>You can download the latest version of NTC Configurator here:</p>
        <a
          href="https://wiki.navtelecom.ru/programs/ntc_configurator/ntc_configurator_last.exe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the latest version
        </a>
        <p className="text-sm text-gray-500 italic">
          Note: Available for Windows OS only.
        </p>
      </div>
    ),
  },
  {
    q: "How can I manage devices remotely?",
    a: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-brand-navy mb-1">SMS Commands</p>
          <p className="mb-1">
            Send direct commands to the device (e.g. APN, server, status,
            reboot).
          </p>
          <a
            href="https://wiki.navtelecom.ru/en/home/devices/commands"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full command list
          </a>
        </div>
        <div>
          <p className="font-bold text-brand-navy mb-1">
            Remote connection via NTC Configurator
          </p>
          <p className="mb-1">
            Connect to an online device via Internet, read/write config, update
            firmware.
          </p>
          <a
            href="https://wiki.navtelecom.ru/en/home/devices/diagnostics/remote_configurator"
            target="_blank"
            rel="noopener noreferrer"
          >
            How it works
          </a>
        </div>
        <div>
          <p className="font-bold text-brand-navy mb-1">DRC Cloud Service</p>
          <p className="mb-1">
            Cloud-based platform for remote updates, config sync, diagnostics,
            and device health monitoring.
          </p>
          <a
            href="https://wiki.navtelecom.ru/en/home/drc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
      </div>
    ),
  },
  {
    q: "Where can I find SMS/GPRS commands?",
    a: (
      <div className="space-y-3">
        <p>You can find the full list of SMS/GPRS commands here:</p>
        <a
          href="https://wiki.navtelecom.ru/en/home/devices/commands"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full command list
        </a>
        <p>
          If you need a complex combined command, please contact Technical
          Support at{" "}
          <a href="mailto:support@navtelecom.ru">support@navtelecom.ru</a>.
        </p>
      </div>
    ),
  },
];

const integrationFaqs = [
  {
    q: "How can I integrate Navtelecom devices with my platform?",
    a: (
      <div className="space-y-3">
        <p>
          Navtelecom devices support integration using the FLEX protocol. We
          provide protocol documentation, integration examples, and developer
          support.
        </p>
        <a
          href="https://wiki.navtelecom.ru/en/home/developers"
          target="_blank"
          rel="noopener noreferrer"
        >
          More information
        </a>
      </div>
    ),
  },
  {
    q: "Where can I check supported vehicles for CAN decoding?",
    a: (
      <div className="space-y-3">
        <p>
          The list of supported vehicles and decoding files is available here:
        </p>
        <a
          href="https://drc.navtelecom.ru/public-can-decoding-files"
          target="_blank"
          rel="noopener noreferrer"
        >
          Supported vehicles list
        </a>
      </div>
    ),
  },
];

const installationFaqs = [
  {
    q: "How should the tracker be positioned during installation?",
    a: (
      <div className="space-y-3">
        <p>
          For reliable GNSS reception, the tracker should be installed with the
          label side facing upward. The side with the SYS / GPS / GSM indicators
          and labels must face upward, as the GNSS antenna is located in the
          upper part of the device.
        </p>
        <p>
          Incorrect device orientation may reduce satellite signal quality and
          affect positioning accuracy.
        </p>
      </div>
    ),
  },
  {
    q: "How can I verify that the device is installed and configured correctly?",
    a: (
      <div className="space-y-3">
        <p>
          After installation, open Telemetry Data in NTC Configurator and check
          GSM signal level, GNSS satellites and coordinates, CAN data (if CAN is
          connected), and data from connected sensors.
        </p>
        <p>
          If the parameters are updating, the device is installed and configured
          correctly. If some parameters are not available, open Protocol
          Settings in the configuration and check whether the required
          parameters are enabled for transmission to the server.
        </p>
        <p>
          If the parameters are enabled but still not updating, check wiring,
          installation position, and device configuration.
        </p>
      </div>
    ),
  },
];

const hardwareFaqs = [
  {
    q: "How can I improve Bluetooth signal when using BLE sensors?",
    a: (
      <div className="space-y-3">
        <p>
          For better Bluetooth communication with BLE sensors, make sure the
          front side of the device is not blocked by metal surfaces. The
          Bluetooth antenna is located on the front side of the device, near the
          indicator area.
        </p>
        <p>For optimal signal strength:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Avoid placing the front side against metal surfaces.</li>
          <li>Keep some space between the device and large wiring bundles.</li>
          <li>
            Install the device so the front side faces the area where BLE
            sensors are located.
          </li>
        </ul>
      </div>
    ),
  },
  {
    q: "When should I choose a tracker with external antennas?",
    a: (
      <div className="space-y-3">
        <p>
          Trackers with external antennas are recommended in installations where
          the device is placed in areas with weak signal reception, such as
          metal compartments, heavy machinery or vehicles with metal body
          shielding.
        </p>
        <p>
          External antennas allow the installer to place the antenna in a
          position with better signal reception, improving communication
          reliability and positioning accuracy. Navtelecom devices with external
          antennas support connection of external GSM and GNSS antennas.
        </p>
      </div>
    ),
  },
  {
    q: "What voltage range do Navtelecom trackers support?",
    a: (
      <div className="space-y-3">
        <p>
          Navtelecom trackers support an input voltage range of 9.5–47 V, which
          allows installation in most vehicles including passenger cars, trucks
          and industrial equipment.
        </p>
        <p>
          In electric vehicles, trackers should be connected to the low-voltage
          auxiliary system (typically 12 V or 24 V), which powers the vehicle
          electronics. Telematics devices must not be connected to the
          high-voltage traction circuit.
        </p>
        <p>
          Always connect the tracker to the vehicle&apos;s low-voltage power
          line.
        </p>
      </div>
    ),
  },
];

const warrantyFaqs = [
  {
    q: "How long is the warranty on Navtelecom devices?",
    a: (
      <p>
        All Navtelecom devices are covered by a 3-year warranty. The backup
        battery and the RTC battery (clock battery) are covered for 1 year.
      </p>
    ),
  },
];

const technologyFaqs = [
  {
    q: "What is the difference between GPS and GNSS?",
    a: (
      <div className="space-y-3">
        <p>
          GPS is a satellite navigation system developed by the United States.
          GNSS (Global Navigation Satellite System) is a general term that
          describes all satellite navigation systems such as GPS, GLONASS,
          Galileo, BeiDou, QZSS and NavIC.
        </p>
        <p>
          Modern GNSS receivers can use signals from multiple satellite systems
          simultaneously. Navtelecom devices use multi-GNSS receivers, allowing
          them to receive signals from several constellations and improve
          positioning accuracy and reliability.
        </p>
      </div>
    ),
  },
  {
    q: "How accurate is GPS tracking?",
    a: (
      <div className="space-y-3">
        <p>
          Under normal conditions, GNSS positioning accuracy is typically 2–5
          meters. Accuracy may vary depending on satellite visibility, urban
          buildings or tunnels, device installation position and antenna
          placement.
        </p>
        <p>
          Correct device installation significantly improves positioning
          accuracy.
        </p>
      </div>
    ),
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans antialiased text-brand-navy">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-60 md:h-80 lg:h-96 flex items-center overflow-hidden product-background-image faq-hero-background">
          <LayoutContainer>
            <div className="max-w-3xl mx-auto text-center z-10">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#28398c] mb-4">
                FAQ
              </p>
              <h1 className="text-h1 mb-5">Frequently Asked Questions</h1>
              <p className="text-body-lg">
                Find answers to the most common questions about Navtelecom
                devices, configuration, integration and support.
              </p>
            </div>
          </LayoutContainer>
        </section>

        {/* FAQ groups in homepage format */}
        <section className="py-16 md:py-20 bg-white">
          <LayoutContainer className="max-w-4xl">
            <div className="space-y-12">
              {/* General */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">General</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {generalFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-top border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Integration */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">Integration</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {integrationFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Installation */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">Installation</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {installationFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Hardware */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">Hardware</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {hardwareFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Warranty */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">Warranty</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {warrantyFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Technology */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-h2">Technology</h2>
                  <div className="h-1 w-16 bg-brand-primary mx-auto rounded-full" />
                </div>
                <div className="space-y-4 text-left max-w-3xl mx-auto">
                  {technologyFaqs.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-brand-light-3 border border-gray-200 px-6 sm:px-8 transition-all duration-200 open:shadow-sm rounded-xl"
                    >
                      <summary className="flex justify-between items-center cursor-pointer list-none py-6">
                        <span className="text-h3 group-hover:text-[#28398c] transition-colors pr-6">
                          {faq.q}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 bg-white border border-gray-300 flex items-center justify-center text-gray-400 group-open:bg-[#28398c] group-open:text-white group-open:border-[#28398c] transition-all rounded">
                          <svg
                            className="w-5 h-5 group-open:rotate-180 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </summary>
                      <div className="text-body text-[#28398c] pb-8 pt-2 border-t border-gray-200 mt-2 [&_a]:text-brand-primary [&_a]:hover:text-brand-primary [&_a]:hover:underline [&_a]:font-bold">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-8 mt-4 text-center">
                <h2 className="text-h2 mb-3">Still have questions?</h2>
                <p className="text-body inline-block">
                  Contact our technical support:{" "}
                  <a
                    href="mailto:support@navtelecom.ru"
                    className="text-brand-primary font-bold hover:underline"
                  >
                    support@navtelecom.ru
                  </a>
                </p>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
