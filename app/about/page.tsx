"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import LayoutContainer from "@/components/LayoutContainer";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
type MapGeo = {
  rsmKey: string;
  properties: Record<string, string | undefined>;
};
const highlightedCountryCodes = new Set([
  "ARG",
  "ARM",
  "AZE",
  "BGD",
  "BLR",
  "BOL",
  "BRA",
  "BFA",
  "CMR",
  "CHL",
  "COL",
  "DJI",
  "ETH",
  "GHA",
  "GIN",
  "HND",
  "IND",
  "JOR",
  "KAZ",
  "KEN",
  "KWT",
  "KGZ",
  "MLI",
  "MEX",
  "MAR",
  "MOZ",
  "NAM",
  "NPL",
  "OMN",
  "PAN",
  "PRY",
  "PER",
  "PHL",
  "SAU",
  "SEN",
  "SRB",
  "ZAF",
  "TJK",
  "TUN",
  "UGA",
  "ARE",
  "TZA",
  "UZB",
  "ZMB",
  "ZWE",
]);
const highlightedCountryNames = new Set([
  "ARGENTINA",
  "ARMENIA",
  "AZERBAIJAN",
  "BANGLADESH",
  "BELARUS",
  "BOLIVIA",
  "BRAZIL",
  "BURKINA",
  "BURKINA FASO",
  "CAMEROON",
  "CHILE",
  "COLOMBIA",
  "DJIBOUTI",
  "ETHIOPIA",
  "GHANA",
  "GUINEA",
  "HONDURAS",
  "INDIA",
  "JORDAN",
  "KAZAKHSTAN",
  "KENYA",
  "KUWAIT",
  "KYRGYZSTAN",
  "MALI",
  "MEXICO",
  "MOROCCO",
  "MOZAMBIQUE",
  "NAMIBIA",
  "NEPAL",
  "OMAN",
  "PANAMA",
  "PARAGUAY",
  "PERU",
  "PHILIPPINES",
  "SAUDI ARABIA",
  "SENEGAL",
  "SERBIA",
  "SOUTH AFRICA",
  "TAJIKISTAN",
  "TUNISIA",
  "UGANDA",
  "UNITED ARAB EMIRATES",
  "UAE",
  "UNITED REPUBLIC OF TANZANIA",
  "TANZANIA",
  "UZBEKISTAN",
  "ZAMBIA",
  "ZIMBABWE",
]);

const normalizeCountryName = (value?: string) =>
  (value || "")
    .toUpperCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^A-Z\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const isTargetCountry = (geo: MapGeo) => {
  const code =
    geo.properties.ISO_A3 || geo.properties.iso_a3 || geo.properties.ISO3;
  const rawName =
    geo.properties.NAME_LONG || geo.properties.name || geo.properties.NAME;
  const normalizedName = normalizeCountryName(rawName);
  return (
    (typeof code === "string" && highlightedCountryCodes.has(code)) ||
    highlightedCountryNames.has(normalizedName)
  );
};

const AboutPage = () => {
  const [hoverPin, setHoverPin] = useState<{ key: string; name: string } | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex items-center bg-brand-light-3 overflow-hidden">
          <LayoutContainer className="relative">
            {/* About Us: Title Left, Text Right */}
            <div className="grid lg:grid-cols-2 gap-0 items-center mb-40">
              <div className="relative pr-12 lg:pr-20">
                <p className="text-caption text-brand-navy mb-4">WHO WE ARE</p>
                <h1 className="text-display leading-none">
                  About
                  <br />
                  <span className="text-brand-navy">Us</span>
                </h1>
              </div>
              <div className="lg:pl-20 border-l-4 border-brand-navy/20 hover:border-brand-navy transition-colors duration-500 py-4">
                <p className="text-body-lg">
                  We manufacture such GPS tracking equipment that ensures stable
                  and efficient solutions for our customers. Our devices provide
                  consistent performance, minimizing maintenance needs and
                  support efforts.
                </p>
              </div>
            </div>

            {/* Mission: Title Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="order-2 lg:order-1 lg:pr-20 lg:text-right border-r-4 border-brand-navy/20 hover:border-brand-navy transition-colors duration-500 py-4">
                <p className="text-body-lg">
                  We deliver reliable and user-friendly telematics solutions,
                  allowing integrators to create efficient tracking systems with
                  minimal maintenance costs.
                </p>
              </div>
              <div className="order-1 lg:order-2 pl-12 lg:pl-20 text-right lg:text-left relative">
                <p className="text-caption text-brand-navy mb-4">OUR GOAL</p>
                <h2 className="text-display leading-none text-brand-navy">
                  Our
                  <br />
                  <span className="text-brand-navy">Mission</span>
                </h2>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Global Presence Section */}
        <section className="py-24 bg-white overflow-hidden">
          <LayoutContainer>
            <div className="text-center mb-16">
              <p className="text-caption text-brand-navy mb-4">GLOBAL REACH</p>
              <h2 className="text-h1 mb-6">
                Our Global <span className="text-brand-navy">Presence</span>
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                Supporting businesses and fleets across the globe with reliable
                telematics infrastructure.
              </p>
            </div>

            <div className="relative bg-brand-light-3 rounded-[3rem] p-4 lg:p-12 border border-gray-100 shadow-inner overflow-visible">
              <div className="w-full">
                <ComposableMap
                  projectionConfig={{
                    scale: 200,
                  }}
                  width={1000}
                  height={500}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: MapGeo[] }) => {
                      const markerGeographies = geographies.filter(isTargetCountry);

                      return (
                        <>
                          {geographies.map((geo) => {
                            const isHighlighted = isTargetCountry(geo);

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={isHighlighted ? "#D8DEE9" : "#E5E7EB"}
                                stroke="none"
                                style={{
                                  default: { outline: "none" },
                                  hover: { outline: "none" },
                                  pressed: { outline: "none" },
                                }}
                              />
                            );
                          })}

                          {markerGeographies.map((geo) => {
                            const markerKey = `marker-${geo.rsmKey}`;
                            const code =
                              geo.properties.ISO_A3 ||
                              geo.properties.iso_a3 ||
                              geo.properties.ISO3;
                            const countryName =
                              geo.properties.NAME_LONG ||
                              geo.properties.name ||
                              geo.properties.NAME ||
                              code;
                            const [longitude, latitude] = geoCentroid(geo);

                            return (
                              <Marker
                                key={markerKey}
                                coordinates={[longitude, latitude]}
                                onMouseEnter={() =>
                                  setHoverPin({
                                    key: markerKey,
                                    name: String(countryName).toUpperCase(),
                                  })
                                }
                                onMouseLeave={() => setHoverPin(null)}
                              >
                                <g className="cursor-pointer">
                                  <path
                                    d="M0 -11 C-6 -11 -10 -6 -10 -1 C-10 6 -2 12 0 15 C2 12 10 6 10 -1 C10 -6 6 -11 0 -11 Z"
                                    fill="#002D49"
                                    stroke="#ffffff"
                                    strokeWidth={1.25}
                                  />
                                  <circle
                                    cx="0"
                                    cy="-2"
                                    r="3"
                                    fill="#ffffff"
                                  />
                                  {hoverPin?.key === markerKey && (
                                    <g pointerEvents="none">
                                      <rect
                                        x="12"
                                        y="-30"
                                        rx="6"
                                        ry="6"
                                        width={Math.max(
                                          hoverPin.name.length * 6.9 + 12,
                                          74,
                                        )}
                                        height="20"
                                        fill="#002D49"
                                        opacity="0.95"
                                      />
                                      <text
                                        x="18"
                                        y="-16"
                                        className="fill-white text-[9px] font-bold tracking-wide"
                                      >
                                        {hoverPin.name}
                                      </text>
                                    </g>
                                  )}
                                </g>
                              </Marker>
                            );
                          })}
                        </>
                      );
                    }}
                  </Geographies>
                </ComposableMap>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Focus Section */}
        <section className="py-24 bg-white border-t border-gray-50">
          <LayoutContainer>
            <div className="text-center mb-20">
              <h2 className="text-h2 mb-4">Our Focus</h2>
              <div className="w-20 h-1.5 bg-brand-navy mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Hardware production",
                  desc: "high-precision tracking with stable connectivity",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Integration support",
                  desc: "we help partners tailor solutions to their needs",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Software solutions",
                  desc: "a range of tools for configuration and management",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Technical support",
                  desc: "fast and competent issue resolution",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group p-8 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl hover:border-brand-navy transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-h3 mb-3 group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </LayoutContainer>
        </section>

        {/* Why Choose Us Highlight */}
        <section className="py-24 bg-brand-light-3">
          <LayoutContainer>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-h1 mb-8">
                  Why Choose
                  <br />
                  <span className="text-brand-navy whitespace-nowrap">
                    Navtelecom?
                  </span>
                </h2>
                <p className="text-body-lg max-w-xl">
                  With over a decade of expertise, we provide the hardware and
                  support your fleet needs to scale globally with reliability
                  you can trust.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { value: "15+", label: "YEARS EXPERIENCE" },
                  { value: "3M+", label: "DEVICES SOLD" },
                  { value: "10+", label: "YEAR LIFETIME" },
                  { value: "3-Year", label: "WARRANTY (+1YR BAT)" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
                  >
                    <p className="text-h1 text-brand-navy mb-4">{stat.value}</p>
                    <p className="text-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Social Media Section */}
        <section className="py-24 bg-white border-t border-gray-50">
          <LayoutContainer>
            <div className="text-center">
              <p className="text-caption text-brand-navy mb-4">
                CONNECT WITH US
              </p>
              <h2 className="text-h1 mb-8">
                Social <span className="text-brand-navy">Media</span>
              </h2>
              <p className="text-body-lg max-w-xl mx-auto mb-12">
                Follow us for the latest news, product updates, and industry
                insights.
              </p>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="#"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F8FAFC] border border-gray-200 text-gray-500 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#F8FAFC] border border-gray-200 text-gray-500 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </LayoutContainer>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
