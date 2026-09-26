"use client";

import { createContext, startTransition, useContext, useEffect, useState } from "react";
import {
  getPlan,
  getSaved,
  getDone,
  savePlan,
  saveSaved,
  saveDone,
} from "@/lib/Storage";

const FitlogContext = createContext(null);

export function FitlogProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [done, setDone] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    startTransition(() => {
      setPlan(getPlan());
      setSaved(getSaved());
      setDone(getDone());
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (hydrated) {
      savePlan(plan);
    }
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) {
      saveSaved(saved);
    }
  }, [saved, hydrated]);

  useEffect(() => {
    if (hydrated) {
      saveDone(done);
    }
  }, [done, hydrated]);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2200);

    return () => clearTimeout(timer);
  }, [toast]);

  function showToast(message) {
    setToast(message);
  }

  function addToPlan(workout) {
    if (plan.length >= 5) {
      showToast("Today's plan is full");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      showToast("Already in today's plan");
      return;
    }

    setPlan((current) => [...current, workout]);
    showToast("Added to today's plan");
  }

  function removeFromPlan(id) {
    setPlan((current) => current.filter((item) => item.id !== id));
    setDone((current) => current.filter((item) => item !== id));
    showToast("Removed from today's plan");
  }

  function saveForLater(workout) {
    if (saved.some((item) => item.id === workout.id)) {
      showToast("Already saved");
      return;
    }

    setSaved((current) => [...current, workout]);
    showToast("Saved for later");
  }

  function removeFromSaved(id) {
    setSaved((current) => current.filter((item) => item.id !== id));
    showToast("Removed from saved");
  }

  function markAsDone(id) {
    if (done.includes(id)) {
      showToast("Already marked as done");
      return;
    }

    setDone((current) => [...current, id]);
    showToast("Workout marked as done");
  }

  function isInPlan(id) {
    return plan.some((item) => item.id === id);
  }

  function isSaved(id) {
    return saved.some((item) => item.id === id);
  }

  function isDone(id) {
    return done.includes(id);
  }

  const planMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const planCalories = plan.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0
  );

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        done,
        toast,
        planMinutes,
        planCalories,
        addToPlan,
        removeFromPlan,
        saveForLater,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
        isDone,
      }}
    >
      {children}

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-lg border border-[#333943] bg-[#191c22] px-5 py-3 text-xs font-medium text-white shadow-2xl">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-black">
              ✓
            </span>
            {toast}
          </div>
        </div>
      )}
    </FitlogContext.Provider>
  );
}

export function useFitlog() {
  return useContext(FitlogContext);
}