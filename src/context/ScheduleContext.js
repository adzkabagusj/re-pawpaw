"use client";

import React, { createContext, useContext, useState } from "react";

const mock_schedules = [
  {
    schedule_id: "schedule1",
    pet_id: "pet1",
    nama: "Milo",
    tanggal: new Date("2024-11-25"),
    jam: "10:30",
    tempat: "Jakal Atas",
    catatan: "kasian Milo",
  },
  {
    schedule_id: "schedule3",
    pet_id: "pet2",
    nama: "Rocky",
    tanggal: new Date("2024-11-30"),
    jam: "08:10",
    tempat: "Jakal Bawah",
    catatan: "semangat Rocky",
  },
];

const ScheduleContext = createContext(undefined);

export const ScheduleProvider = ({ children }) => {
  const [schedules, setSchedules] = useState(mock_schedules);

  // Create a new grooming schedule
  const addSchedule = (newSchedule) => {
    setSchedules((prev) => [...prev, newSchedule]);
  };

  // TO-DO: Read schedules

  // update an existing grooming schedule
  const updateSchedule = (updatedSchedule) => {
    setSchedules((prev) =>
      prev.map((schedule) =>
        schedule.schedule_id === updatedSchedule.schedule_id
          ? updatedSchedule
          : schedule
      )
    );
  };

  // Delete a grooming schedule
  const removeSchedule = (scheduleId) => {
    setSchedules((prev) =>
      prev.filter((schedule) => schedule.schedule_id !== scheduleId)
    );
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules,
        addSchedule,
        updateSchedule,
        removeSchedule,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export const useSchedule = () => useContext(ScheduleContext);
