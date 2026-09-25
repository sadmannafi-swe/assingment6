const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";
const DONE_KEY = "fitlog-done";

function read(key) {
    if (typeof window === "undefined") {
        return [];
    }

    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch {
        return [];
    }
}

function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getPlan() {
    return read(PLAN_KEY);
}

export function getSaved() {
    return read(SAVED_KEY);
}

export function getDone() {
    return read(DONE_KEY);
}

export function savePlan(value) {
    write(PLAN_KEY, value);
}

export function saveSaved(value) {
    write(SAVED_KEY, value);
}

export function saveDone(value) {
    write(DONE_KEY, value);
}