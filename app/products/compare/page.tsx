"use client";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Check, Minus } from "lucide-react";
import "../../../components/series/series-page.css";
import "./compare-page.css";
import Link from "next/link";
import comparisonData from "@/data/comparison.json";

const deviceData = {
  "S-2010": {
    name: "S-2010",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "1 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: false,
    },
  },
  "S-2011": {
    name: "S-2011",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "1 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: "130 mAh",
    },
  },
  "S-2013": {
    name: "S-2013",
    series: "Start Series",
    connectivity: "2G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "2 Digital IN & 1 Analog IN",
      Outputs: "1 OUT",
      CAN: true,
      "Voice Communication": false,
      Battery: "130 mAh",
    },
  },
  "S-4011": {
    name: "S-4011",
    series: "Start Series",
    connectivity: "4G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": false,
      "Communication interface": "UART, Micro USB",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "1 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: "130 mAh",
    },
  },
  "S-4013": {
    name: "S-4013",
    series: "Start Series",
    connectivity: "4G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "2 Digital IN & 1 Analog IN",
      Outputs: "1 OUT",
      CAN: true,
      "Voice Communication": false,
      Battery: "130 mAh",
    },
  },
  "S-4513": {
    name: "S-4513",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "2 OUT",
      CAN: "Dual CAN",
      "Voice Communication": false,
      Battery: "380 mAh",
    },
  },
  "S-4511": {
    name: "S-4511",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": false,
      "Communication interface": "RS-485",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "2 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: "380 mAh",
    },
  },
  "S-4537": {
    name: "S-4537",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: "Dual CAN",
      "Voice Communication": false,
      Battery: "800 mAh",
    },
  },
  "S-4535": {
    name: "S-4535",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: "CAN",
      "Voice Communication": false,
      Battery: "800 mAh",
    },
  },
  "S-4533": {
    name: "S-4533",
    series: "Smart Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: "800 mAh",
    },
  },
  "S-2437": {
    name: "S-2437",
    series: "Smart Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: "Dual CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-2435": {
    name: "S-2435",
    series: "Smart Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: "CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-2433": {
    name: "S-2433",
    series: "Smart Series",
    connectivity: "2G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: false,
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-2425": {
    name: "S-2425",
    series: "Smart Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": false,
      "Interfaces and Protocols": "1-Wire",
      Inputs: "3 Universal IN",
      Outputs: "2 OUT",
      CAN: false,
      "Voice Communication": false,
      Battery: "380 mAh",
    },
  },
  "S-2653": {
    name: "S-2653",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "6 Universal IN",
      Outputs: "4 OUT",
      CAN: "Dual CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-2613": {
    name: "S-2613",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Type": "Single SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": false,
      "Communication interface": "RS-485",
      "Custom Logic": false,
      "Interfaces and Protocols": "-",
      Inputs: "4 Digital IN & 1 Analog IN",
      Outputs: "4 OUT",
      CAN: false,
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-2651": {
    name: "S-2651",
    series: "Signal Series",
    connectivity: "2G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 4.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "6 Universal IN",
      Outputs: "4 OUT",
      CAN: "CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-4753": {
    name: "S-4753",
    series: "Signal Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "6 Universal IN",
      Outputs: "4 OUT",
      CAN: "Dual CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
  "S-4751": {
    name: "S-4751",
    series: "Signal Series",
    connectivity: "4G",
    specs: {
      "SIM Support": "Dual SIM",
      "Engine Hours": "Engine Hours",
      Bluetooth: "Bluetooth 5.0",
      "Eco Driving": true,
      "Communication interface": "RS-485, RS-232",
      "Custom Logic": true,
      "Interfaces and Protocols": "1-Wire, MODBUS",
      Inputs: "6 Universal IN",
      Outputs: "4 OUT",
      CAN: "CAN",
      "Voice Communication": true,
      Battery: "800 mAh",
    },
  },
};

type ComparisonRow =
  | { type: "section"; label: string }
  | { type: "param"; label: string };

const normalizeForDiff = (value: unknown) => {
  if (value === null || value === undefined) return "-";
  if (typeof value === "boolean") return value ? "true" : "false";
  const str = String(value).trim();
  if (str === "") return "-";
  return str;
};

/** Used to omit the RS-232 comparison row when no selected device supports it. */
const lacksRs232 = (value: unknown): boolean => {
  if (value === false) return true;
  if (value === null || value === undefined) return true;
  if (value === "-") return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (typeof value === "number" && value <= 0) return true;
  return false;
};

/** Badge label before " Network" — from fallbacks or merged specs (Network Type). */
const resolveConnectivityLabel = (
  fallbackConnectivity: string | undefined,
  excelConnectivity: string | undefined,
  mergedSpecs: Record<string, unknown>,
): string => {
  const fromFallback = fallbackConnectivity?.trim();
  if (fromFallback) return fromFallback;
  const fromExcel = excelConnectivity?.trim();
  if (fromExcel) return fromExcel;
  const networkType = mergedSpecs["Network Type"];
  if (networkType == null || networkType === "") return "";
  const raw = String(networkType).trim();
  if (raw === "2G") return "2G";
  if (raw.includes("4G")) return "4G";
  return raw;
};

const normalizeModelKey = (deviceName: string) =>
  deviceName.trim().toUpperCase().replace(/\s+/g, "");

/**
 * Series label for the comparison header — derived from model ranges used on the site
 * (S-24xx / S-45xx = Smart, S-26xx / S-47xx = Signal, S-20xx / S-40xx = Start).
 */
const seriesLabelFromModel = (deviceName: string): string | null => {
  const m = normalizeModelKey(deviceName);
  if (/^S-20\d{2}$/.test(m) || /^S-40\d{2}$/.test(m)) return "Start Series";
  if (/^S-24\d{2}$/.test(m) || /^S-45\d{2}$/.test(m)) return "Smart Series";
  if (/^S-26\d{2}$/.test(m) || /^S-47\d{2}$/.test(m)) return "Signal Series";
  return null;
};

/**
 * Product detail URL for a tracker model (matches app route folders).
 */
const trackingDeviceDetailHref = (deviceName: string) => {
  const m = normalizeModelKey(deviceName);
  const slug = m.toLowerCase();

  const segment =
    /^S-20\d{2}$/.test(m) || /^S-40\d{2}$/.test(m)
      ? "start-series"
      : /^S-24\d{2}$/.test(m) || /^S-45\d{2}$/.test(m)
        ? "smart-series"
        : /^S-26\d{2}$/.test(m) || /^S-47\d{2}$/.test(m)
          ? "signal-series"
          : "start-series";

  return `/products/tracking-devices/${segment}/${slug}`;
};

const ComparisonContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const devicesQuery = searchParams.get("devices");
  const selectedDeviceNames = devicesQuery ? devicesQuery.split(",") : [];

  const excelDeviceData = (comparisonData.deviceData ?? {}) as Record<
    string,
    {
      name?: string;
      series?: string;
      connectivity?: string;
      specs?: Record<string, unknown>;
    }
  >;

  const rows = ((comparisonData.rows ?? []) as ComparisonRow[]).filter(
    (r) => !(r.type === "param" && r.label === "EPO"),
  );

  const selectedDevices = selectedDeviceNames
    .map((name) => {
      const fallback = deviceData[name as keyof typeof deviceData];
      const excel = excelDeviceData[name];

      if (!fallback && !excel) return null;

      const mergedSpecs = {
        ...(fallback?.specs ?? {}),
        ...(excel?.specs ?? {}),
      } as Record<string, unknown>;

      const series =
        seriesLabelFromModel(name) ??
        ((excel?.series ?? fallback?.series ?? "") as string);
      const connectivity = resolveConnectivityLabel(
        fallback?.connectivity,
        excel?.connectivity,
        mergedSpecs,
      );

      return {
        name: name,
        series,
        connectivity,
        specs: mergedSpecs,
      };
    })
    .filter(Boolean) as Array<{
    name: string;
    series: string;
    connectivity: string;
    specs: Record<string, unknown>;
  }>;

  const rowsForDevices = useMemo(() => {
    const noDeviceHasRs232 = selectedDevices.every((d) =>
      lacksRs232(d.specs["RS-232"]),
    );
    if (!noDeviceHasRs232) return rows;
    return rows.filter(
      (r) => !(r.type === "param" && r.label === "RS-232"),
    );
  }, [rows, selectedDevices]);

  const visibleRows = useMemo(() => {
    if (!showDifferencesOnly) return rowsForDevices;

    const result: ComparisonRow[] = [];
    let pendingSection: ComparisonRow | null = null;
    let sectionHeaderEmitted = false;

    const startNewSection = (sectionRow: ComparisonRow) => {
      pendingSection = sectionRow;
      sectionHeaderEmitted = false;
    };

    for (const row of rowsForDevices) {
      if (row.type === "section") {
        startNewSection(row);
        continue;
      }

      const param = row.label;
      const normalizedValues = selectedDevices.map((device) =>
        normalizeForDiff(device.specs[param]),
      );
      const unique = new Set(normalizedValues);
      const isDifferent = unique.size > 1;

      if (isDifferent) {
        if (pendingSection && !sectionHeaderEmitted) {
          result.push(pendingSection);
          sectionHeaderEmitted = true;
        }
        result.push(row);
      }
    }

    return result;
  }, [rowsForDevices, selectedDevices, showDifferencesOnly]);

  if (!isMounted) {
    return (
      <div className="cmp-state">
        <p>Loading…</p>
      </div>
    );
  }

  if (selectedDevices.length === 0) {
    return (
      <div className="cmp-state">
        <p className="sp-eyebrow">DEVICE COMPARISON</p>
        <h2>No devices selected for comparison</h2>
        <p>Please go back and select at least one device to compare.</p>
        <Link
          href="/products/tracking-devices/start-series"
          className="sp-button sp-button-primary"
        >
          Back to Lineup
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="sp-hero cmp-hero">
        <div className="sp-grid-pulses" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="sp-shell cmp-hero-inner">
          <button type="button" onClick={() => router.back()} className="sp-back cmp-back">
            <ArrowLeft aria-hidden="true" />
            Back to Lineup
          </button>
          <p className="sp-eyebrow">SIDE BY SIDE</p>
          <h1>
            Device <span>Comparison</span>
          </h1>
          <p className="sp-lead">
            Comparing {selectedDevices.length}{" "}
            {selectedDevices.length === 1 ? "device" : "devices"}:{" "}
            {selectedDevices.map((device) => device.name).join(" · ")}
          </p>
        </div>
      </section>

      <section className="sp-section cmp-section-wrap">
        <div className="sp-shell">
          <div className="cmp-toolbar">
            <label className="cmp-toggle">
              <input
                type="checkbox"
                checked={showDifferencesOnly}
                onChange={(e) => setShowDifferencesOnly(e.target.checked)}
              />
              <span className="cmp-toggle-track" aria-hidden="true" />
              <span>Show differences only</span>
            </label>
          </div>

          <div className="cmp-card">
            <div className="cmp-scroll">
              <table className="cmp-table">
                <thead>
                  <tr>
                    <th className="cmp-param-head" scope="col">
                      Parameters
                    </th>
                    {selectedDevices.map((device, idx) => (
                      <th key={idx} scope="col" className="cmp-device-head">
                        <span
                          className={`cmp-pill ${
                            String(device.connectivity).toLowerCase().includes("2g")
                              ? ""
                              : "cmp-pill-4g"
                          }`}
                        >
                          {device.connectivity} Network
                        </span>
                        <strong>{device.name}</strong>
                        <small>{device.series}</small>
                        <Link href={trackingDeviceDetailHref(device.name)}>
                          View details
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map((row, rIdx) => {
                    if (row.type === "section") {
                      return (
                        <tr key={`section-${rIdx}`} className="cmp-section-row">
                          <td colSpan={selectedDevices.length + 1}>{row.label}</td>
                        </tr>
                      );
                    }

                    const param = row.label;
                    return (
                      <tr key={`param-${rIdx}-${param}`}>
                        <th scope="row" className="cmp-param">
                          {param}
                        </th>
                        {selectedDevices.map((device, dIdx) => {
                          const value = device.specs[param];

                          const isEmpty =
                            value === null ||
                            value === undefined ||
                            value === "-" ||
                            (typeof value === "string" && value.trim() === "");

                          return (
                            <td key={`${device.name}-${param}-${dIdx}`}>
                              {typeof value === "boolean" ? (
                                value ? (
                                  <span className="cmp-yes" aria-label="Supported">
                                    <Check aria-hidden="true" />
                                  </span>
                                ) : (
                                  <Minus className="cmp-no" aria-label="Not available" />
                                )
                              ) : !isEmpty ? (
                                <span className="cmp-value">{String(value)}</span>
                              ) : (
                                <Minus className="cmp-no" aria-label="Not available" />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="cmp-note">
            * Specifications are subject to change. Please contact support for
            the most up-to-date information.
          </p>
        </div>
      </section>
    </>
  );
};

const ComparisonPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-brand-navy">
      <Navbar />
      <div className="sp-page cmp-page">
        <main>
          <Suspense
            fallback={
              <div className="cmp-state">
                <p>Loading…</p>
              </div>
            }
          >
            <ComparisonContent />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ComparisonPage;
