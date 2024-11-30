"use client";

import React, { createContext, useContext, useState } from "react";

const health_tracking_mock = [
  {
    tracking_id: "tracking1",
    pet_id: "pet1",
    nama: "Milo",
    riwayat_penyakit: "asma",
    alergi: "",
    vaksinasi: "",
  },
  {
    tracking_id: "tracking2",
    pet_id: "pet2",
    nama: "Rocky",
    riwayat_penyakit: "pilek",
    alergi: "",
    vaksinasi: "",
  },
];

const HealthTrackingContext = createContext(undefined);

export const HealthTrackingProvider = ({ children }) => {
  const [healthTrackings, setHealthTrackings] = useState(health_tracking_mock);

  const addHealthTracking = (newTracking) => {
    setHealthTrackings((prev) => [...prev, newTracking]);
  };

  const updateHealthTracking = (updatedTracking) => {
    setHealthTrackings((prev) =>
      prev.map((tracking) =>
        tracking.tracking_id === updatedTracking.tracking_id
          ? updatedTracking
          : tracking
      )
    );
  };

  const removeHealthTracking = (trackingId) => {
    setHealthTrackings((prev) =>
      prev.filter((tracking) => tracking.tracking_id !== trackingId)
    );
  };

  return (
    <HealthTrackingContext.Provider
      value={{
        healthTrackings,
        addHealthTracking,
        updateHealthTracking,
        removeHealthTracking,
      }}>
      {children}
    </HealthTrackingContext.Provider>
  );
};

export const useHealthTracking = () => useContext(HealthTrackingContext);
