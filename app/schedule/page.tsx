import type { Metadata } from "next";
import { ClassCard } from "@/components/class-card";
import { DotGrid } from "@/components/dot-grid";
import { Wave } from "@/components/wave";
import { getUpcomingClasses } from "@/lib/classes";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Upcoming Rosebud Children's Yoga classes for ages 2–5 at Pacific Park in Brooklyn.",
};

export default function SchedulePage() {
  const upcoming = getUpcomingClasses();

  return (
    <div className="relative flex min-w-0 flex-1 flex-col pb-8 pt-8">
      <DotGrid className="top-0 right-2 hidden opacity-80 sm:grid" />
      <Wave className="pointer-events-none absolute bottom-8 left-0 hidden w-44 text-purple sm:block" />

      <h1 className="reveal font-display text-4xl font-extrabold text-ink sm:text-5xl">
        Schedule
      </h1>
      <p className="reveal reveal-delay-1 mt-3 max-w-lg text-lg leading-relaxed text-pretty text-ink/75">
        Outdoor classes on Saturday mornings. Same cozy 30-minute class, two
        dates to choose from.
      </p>

      {upcoming.length > 0 ? (
        <div className="mt-8 grid gap-5">
          {upcoming.map((yogaClass, index) => (
            <div
              key={yogaClass.id}
              className={`reveal ${index === 0 ? "reveal-delay-2" : "reveal-delay-3"}`}
            >
              <ClassCard yogaClass={yogaClass} />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-8 font-display text-xl font-bold text-ink">
          New dates will be posted here soon.
        </p>
      )}
    </div>
  );
}
