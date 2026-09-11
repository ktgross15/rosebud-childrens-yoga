import type { YogaClass } from "@/lib/classes";
import { DONATION, EMAIL_HREF, MAPS_HREF } from "@/lib/site";

export function ClassCard({ yogaClass }: { yogaClass: YogaClass }) {
  return (
    <article className="class-card relative overflow-hidden rounded-[32px] bg-white/55 px-7 py-8 shadow-[0_12px_40px_rgba(79,122,86,0.08)]">
      <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-purple">
        {yogaClass.dayLabel}
      </p>
      <h2 className="mt-1 font-display text-4xl font-extrabold leading-none text-ink sm:text-5xl">
        {yogaClass.dateLabel}
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="pill">{yogaClass.time}</span>
        <span className="pill">{yogaClass.ages}</span>
      </div>
      <p className="mt-5 font-display text-xl font-bold text-ink">
        {yogaClass.location}
      </p>
      <p className="mt-1 text-lg text-ink/80">
        <a
          href={MAPS_HREF}
          className="text-ink/80 underline decoration-green-dark/40 underline-offset-4 hover:text-green-dark"
          target="_blank"
          rel="noreferrer"
        >
          {yogaClass.address}
        </a>
      </p>
      <p className="mt-3 text-base text-ink/60">{DONATION}</p>
      <a
        href={EMAIL_HREF}
        className="mt-6 inline-flex rounded-full bg-purple px-5 py-2.5 font-display text-lg font-bold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5"
      >
        Email to sign up
      </a>
    </article>
  );
}
