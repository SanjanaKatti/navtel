"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import type { GeometryObject } from "geojson";
import LayoutContainer from "@/components/LayoutContainer";

type MapGeo = {
  rsmKey: string;
  type: "Feature";
  geometry: GeometryObject | null;
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
  "RUS",
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
  "RUSSIA",
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
    .replace(/\(.*?\)|\s-\s.*/g, "") // Remove text in parentheses and after " - "
    .replace(/[^A-Z\s]/g, " ") // Replace non-alphabetic characters with spaces
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
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

interface MapGeographiesProps {
  geographies: MapGeo[];
}

const MapGeographies: React.FC<MapGeographiesProps> = ({ geographies }) => {
  return (
    <Geographies geography="/features.json">
      {({ geographies: renderedGeographies }: { geographies: MapGeo[] }) => (
        <>
          {renderedGeographies.map((geo) => {
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
        </>
      )}
    </Geographies>
  );
};

interface MapMarkersProps {
  memoizedMarkerPool: PinInfo[];
  currentPulsingMarkerId: string | null;
  setHoverPin: React.Dispatch<React.SetStateAction<PinInfo | null>>;
  activePin: PinInfo | null;
}

interface PinInfo {
  key: string;
  name: string;
  longitude: number;
  latitude: number;
  tooltipWidth: number;
}

const MapMarkers: React.FC<MapMarkersProps> = ({
  memoizedMarkerPool,
  currentPulsingMarkerId,
  setHoverPin,
  activePin,
}) => {
  const pulseDuration = 3;

  return (
    <>
      {memoizedMarkerPool.map((pinInfo) => {
        const { key: markerKey, name: countryName, longitude, latitude, tooltipWidth } = pinInfo;
        const isPulsing = currentPulsingMarkerId === markerKey;

        return (
          <Marker
            key={markerKey}
            coordinates={[longitude, latitude]}
            onMouseEnter={() =>
              setHoverPin({
                key: markerKey,
                name: countryName,
                longitude,
                latitude,
                tooltipWidth,
              })
            }
            onMouseLeave={() => setHoverPin(null)}
          >
            <g className="cursor-pointer">
              <circle cx="0" cy="-2" r="3.6" fill="#28398c" />
              {isPulsing && (
                <>
                  {/* First ripple */}
                  <circle
                    cx="0"
                    cy="-2"
                    r="3.6"
                    fill="none"
                    stroke="#7fb6df"
                    strokeWidth="1.5"
                  >
                    <animate
                      attributeName="r"
                      from="3.6"
                      to="9"
                      dur={`${pulseDuration}s`}
                      values="3.6; 9; 3.6"
                      keyTimes="0; 0.24; 1"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      dur={`${pulseDuration}s`}
                      values="0; 0.45; 0"
                      keyTimes="0; 0.14; 0.34"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {/* Second ripple with delay */}
                  <circle
                    cx="0"
                    cy="-2"
                    r="3.6"
                    fill="none"
                    stroke="#9ac9ea"
                    strokeWidth="1.2"
                    opacity="0.22"
                  >
                    <animate
                      attributeName="r"
                      from="3.6"
                      to="7.5"
                      dur={`${pulseDuration}s`}
                      begin="0.2s"
                      values="3.6; 7.5; 3.6"
                      keyTimes="0; 0.22; 1"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      dur={`${pulseDuration}s`}
                      begin="0.2s"
                      values="0; 0.32; 0"
                      keyTimes="0; 0.12; 0.3"
                      repeatCount="indefinite"
                    />
                  </circle>
                </>
              )}
            </g>
          </Marker>
        );
      })}

      {activePin && (
        <Marker coordinates={[activePin.longitude, activePin.latitude]}>
          <g pointerEvents="none">
            {(() => {
              const isRussia = activePin.name === "RUSSIA";
              const rectY = isRussia ? 10 : -30;
              const textY = isRussia ? 20 : -20;

              return (
                <>
                  <rect
                    x={-activePin.tooltipWidth / 2}
                    y={rectY}
                    rx="6"
                    ry="6"
                    width={activePin.tooltipWidth}
                    height="20"
                    fill="#002D49"
                    opacity="0.95"
                  />
                  <text
                    x="0"
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-[9px] font-bold tracking-wide"
                  >
                    {activePin.name}
                  </text>
                </>
              );
            })()}
          </g>
        </Marker>
      )}
    </>
  );
};

const AboutPage = () => {
  const [hoverPin, setHoverPin] = useState<PinInfo | null>(null);
  const markerPoolRef = useRef<PinInfo[]>([]);
  const [currentPulsingMarkerId, setCurrentPulsingMarkerId] = useState<
    string | null
  >(null);
  const activePin = hoverPin; // Tooltips only appear on hover

  const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";
  const [geographies, setGeographies] = useState<MapGeo[] | null>(null);
  const [loadingGeographies, setLoadingGeographies] = useState(true);

  useEffect(() => {
    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => {
        setGeographies(data.features);
        setLoadingGeographies(false);
      })
      .catch((error) => {
        console.error("Error fetching geographies:", error);
        setLoadingGeographies(false);
      });
  }, []);

  const markerGeographies = useMemo(
    () => geographies?.filter(isTargetCountry) || [],
    [geographies],
  );

  const memoizedMarkerPool: PinInfo[] = useMemo(
    () =>
      markerGeographies.map((geo) => {
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
        const tooltipWidth = Math.max(
          String(countryName).length * 6.9 + 12,
          74,
        );
        return {
          key: markerKey,
          name: String(countryName).toUpperCase(),
          longitude,
          latitude,
          tooltipWidth,
        };
      }),
    [markerGeographies],
  );


  useEffect(() => {
    if (markerPoolRef.current.length === 0) return;

    let pulseTimer: NodeJS.Timeout;
    let delayTimer: NodeJS.Timeout;

    const startPulse = () => {
      const pool = markerPoolRef.current;
      if (pool.length === 0) return; // Pool might become empty dynamically

      let nextMarker: PinInfo;
      if (pool.length === 1) {
        nextMarker = pool[0];
      } else {
        let candidate = pool[Math.floor(Math.random() * pool.length)];
        let guard = 0;
        // Ensure next marker is different from the current one, up to 8 retries
        while (
          currentPulsingMarkerId &&
          candidate.key === currentPulsingMarkerId &&
          guard < 8
        ) {
          candidate = pool[Math.floor(Math.random() * pool.length)];
          guard += 1;
        }
        nextMarker = candidate;
      }

      setCurrentPulsingMarkerId(nextMarker.key);

      pulseTimer = setTimeout(() => {
        setCurrentPulsingMarkerId(null);
        delayTimer = setTimeout(startPulse, 1000); // 1 second delay
      }, 3000); // Pulse for 3 seconds
    };

    startPulse(); // Initial pulse

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(delayTimer);
    };
  }, [currentPulsingMarkerId]);

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
                <p className="text-base md:text-lg font-bold text-brand-navy uppercase tracking-[0.2em] mb-4 md:mb-6 md:whitespace-nowrap">
                  WHO WE ARE
                </p>
                <h1 className="text-display leading-none">
                  About
                  <br />
                  <span className="text-brand-navy">Us</span>
                </h1>
              </div>
              <div className="lg:pl-20 border-l-4 border-brand-navy/20 hover:border-brand-navy transition-colors duration-500 py-8">
                <p className="text-body-lg">
                  We design and manufacture professional telematics hardware for
                  system integrators and fleet operators worldwide. Our devices
                  are built for long-term deployment, deep vehicle data access,
                  and stable performance in demanding environments.
                </p>
              </div>
            </div>

            {/* Mission: Title Right, Text Left */}
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              <div className="order-2 lg:order-1 lg:pr-20 lg:text-right border-r-4 border-brand-navy/20 hover:border-brand-navy transition-colors duration-500 py-10">
                <p className="text-body-lg">
                  To provide integration-ready telematics devices that reduce
                  project risk, simplify deployment, and ensure predictable
                  operation over years -- not months. We focus on engineering
                  quality, stable architecture, and real technical support for
                  complex fleet projects.
                </p>
              </div>
              <div className="order-1 lg:order-2 pl-12 lg:pl-20 text-right lg:text-left relative">
                <p className="text-base md:text-lg font-bold text-brand-navy uppercase tracking-[0.2em] mb-4 md:mb-6 md:whitespace-nowrap">
                  OUR GOAL
                </p>
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
        <section className="pt-24 pb-12 bg-white overflow-hidden">
          <LayoutContainer>
            <div className="text-center mb-16">
              <p className="text-base md:text-lg font-bold text-brand-navy uppercase tracking-[0.2em] mb-4 md:mb-6 md:whitespace-nowrap">
                WORLDWIDE DEPLOYMENT
              </p>
              <h2 className="text-h1 mb-6">
                Global Reach.{" "}
                <span className="text-brand-navy">Proven Deployment.</span>
              </h2>
              <p className="text-body-lg max-w-2xl mx-auto">
                3M+ devices operating in diverse climates and markets. Long-term
                partnerships with system integrators worldwide.
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
                  <MapGeographies geographies={geographies || []} />
                  <MapMarkers
                    memoizedMarkerPool={memoizedMarkerPool}
                    currentPulsingMarkerId={currentPulsingMarkerId}
                    setHoverPin={setHoverPin}
                    activePin={activePin}
                  />
                </ComposableMap>
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* What We Build Section */}
        <section className="py-12 bg-white border-t border-gray-50">
          <LayoutContainer>
            <div className="text-center mb-20">
              <h2 className="text-h1 mb-4">What We Build</h2>
              <div className="w-20 h-1.5 bg-brand-navy mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Hardware Production",
                  desc: "Long-term hardware roadmap and controlled firmware evolution.",
                  cardClass: "bg-[#2d57a4] border-[#234785] hover:bg-[#264f95]",
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
                  title: "Integration Assistance",
                  desc: "Engineering-level support for complex telematics projects.",
                  cardClass: "bg-[#009ccc] border-[#007ea5] hover:bg-[#008bb8]",
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
                  title: "Software Tools",
                  desc: "Configuration, diagnostics and fleet management platforms.",
                  cardClass: "bg-[#1278be] border-[#0e6199] hover:bg-[#106eaf]",
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
                  title: "After-Sales Support",
                  desc: "Structured, responsive and technically competent assistance.",
                  cardClass: "bg-[#52c3f1] border-[#36aedd] hover:bg-[#3db7e8]",
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
                  className={`group p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${item.cardClass}`}
                >
                  <div className="w-16 h-16 bg-white/12 border border-white/20 rounded-xl shadow-sm flex items-center justify-center text-white mb-6 group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-h3 mb-3 text-white transition-colors min-h-[50px]">
                    {item.title}
                  </h3>
                  <p className="text-body-lg text-[#D8E4F5]">{item.desc}</p>
                </div>
              ))}
            </div>
          </LayoutContainer>
        </section>

        {/* Why Choose Navtelecom */}
        <section className="py-24 bg-brand-light-3">
          <LayoutContainer>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-h1 mb-8">
                  Why Choose{" "}
                  <span className="text-brand-navy whitespace-nowrap">
                    Navtelecom?
                  </span>
                </h2>
                <p className="text-body-lg max-w-xl">
                  Because serious telematics projects require predictable
                  hardware, deep integration, and direct engineering support. We
                  build devices designed for long-term deployment, controlled
                  firmware evolution, and real-world fleet stability.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    label: "Engineering-Level Support",
                    desc: "Direct access to product engineers. Fast, competent responses without intermediaries.",
                    cardClass:
                      "bg-[#2d57a4] border-[#234785] hover:bg-[#264f95]",
                  },
                  {
                    label: "Integration-Ready Architecture",
                    desc: "CAN, RS-485, BLE and flexible I/O. Built for complex fleet and industrial projects.",
                    cardClass:
                      "bg-[#009ccc] border-[#007ea5] hover:bg-[#008bb8]",
                  },
                  {
                    label: "Stable Hardware Platform",
                    desc: "No sudden redesigns or disruptive firmware changes. Scale with confidence.",
                    cardClass:
                      "bg-[#1278be] border-[#0e6199] hover:bg-[#106eaf]",
                  },
                  {
                    label: "Long-Term Reliability",
                    desc: "36-month warranty and 10+ year lifecycle proven in real deployments.",
                    cardClass:
                      "bg-[#52c3f1] border-[#36aedd] hover:bg-[#3db7e8]",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-6 md:p-7 rounded-[1.5rem] shadow-sm border transition-colors duration-300 ${item.cardClass}`}
                  >
                    <p className="text-h3 mb-2 text-white">{item.label}</p>
                    <p className="text-body-sm text-[#D8E4F5]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </LayoutContainer>
        </section>

        {/* Connect With Us Section */}
        <section className="py-24 bg-white border-t border-gray-50">
          <LayoutContainer>
            <div className="text-center">
              <p className="text-base md:text-lg font-bold text-brand-navy uppercase tracking-[0.2em] mb-4 md:mb-6 md:whitespace-nowrap">
                CONNECT WITH US
              </p>
              <h2 className="text-h1 mb-8">
                Stay <span className="text-brand-navy">Updated</span>
              </h2>
              <p className="text-body-lg max-w-xl mx-auto mb-12">
                Product releases, firmware updates, CAN decoding files and real
                project insights - directly from our engineering team.
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