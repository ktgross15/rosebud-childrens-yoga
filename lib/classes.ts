export type YogaClass = {
  id: string;
  date: string;
  dateLabel: string;
  dayLabel: string;
  time: string;
  ages: string;
  location: string;
  address: string;
};

export const classes: YogaClass[] = [
  {
    id: "2026-09-19",
    date: "2026-09-19",
    dateLabel: "September 19",
    dayLabel: "Saturday",
    time: "10:30–11am",
    ages: "Ages 2–5",
    location: "Pacific Park",
    address: "615 Dean St, Brooklyn, NY",
  },
  {
    id: "2026-09-26",
    date: "2026-09-26",
    dateLabel: "September 26",
    dayLabel: "Saturday",
    time: "10:30–11am",
    ages: "Ages 2–5",
    location: "Pacific Park",
    address: "615 Dean St, Brooklyn, NY",
  },
];

export function getUpcomingClasses(fromDate = new Date()): YogaClass[] {
  const today = fromDate.toISOString().slice(0, 10);
  return classes.filter((yogaClass) => yogaClass.date >= today);
}

export function getNextClass(fromDate = new Date()): YogaClass | null {
  return getUpcomingClasses(fromDate)[0] ?? null;
}
