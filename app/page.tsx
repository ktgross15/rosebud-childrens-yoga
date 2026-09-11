import Image from "next/image";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";
import { Wave } from "@/components/wave";
import { getNextClass } from "@/lib/classes";
import { AGES, DONATION } from "@/lib/site";

export default function Home() {
  const nextClass = getNextClass();

  return (
    <div className="relative flex min-w-0 flex-1 flex-col items-center pb-6 pt-8 text-center">
      <DotGrid className="top-2 left-0 opacity-80" />
      <DotGrid className="right-0 bottom-24 hidden opacity-80 sm:grid" />
      <Wave className="pointer-events-none absolute bottom-28 left-0 z-10 hidden w-40 text-purple sm:block" />
      <Wave className="pointer-events-none absolute top-40 right-0 z-10 hidden w-40 text-purple sm:block" />

      <div className="title-blob reveal">
        <h1 className="max-w-[16rem] font-display text-[1.65rem] font-extrabold leading-[1.05] tracking-wide text-balance sm:max-w-none sm:text-5xl sm:leading-none">
          Pacific Park Yoga
        </h1>
      </div>

      <p className="reveal reveal-delay-1 mt-7 max-w-md px-1 font-display text-xl font-bold leading-snug text-balance text-ink sm:text-2xl">
        Little bodies, big stretches, and a grassy park morning.
      </p>
      <p className="reveal reveal-delay-2 mt-3 max-w-md px-1 text-lg leading-relaxed text-ink/75">
        Gentle, playful yoga for {AGES.toLowerCase()} at Pacific Park in
        Brooklyn. First-timers are welcome! Just bring comfy clothes and a towel
        or mat.
      </p>

          <div className="hero-art reveal reveal-delay-3 relative z-0 -mt-2 w-full max-w-xl">
        <Image
          src="/kids-yoga-illustration.png"
          alt="A child sitting cross-legged on a yoga mat outdoors, hands in namaste"
          width={1152}
          height={864}
          priority
          className="h-auto w-full"
        />
      </div>

      {nextClass ? (
        <div className="reveal reveal-delay-4 -mt-4 flex w-full min-w-0 flex-col items-center gap-3 px-1">
          <p className="px-2 font-display text-lg font-bold text-ink">
            Next class: {nextClass.dayLabel}, {nextClass.dateLabel} ·{" "}
            {nextClass.time}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="pill">{nextClass.ages}</span>
            <span className="pill">{nextClass.location}</span>
          </div>
          <p className="text-base text-ink/60">{DONATION}</p>
          <div className="mt-2 flex w-full justify-center">
            <Link
              href="/schedule"
              className="rounded-full bg-green px-6 py-2.5 font-display text-lg font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-green-dark"
            >
              See the schedule
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
