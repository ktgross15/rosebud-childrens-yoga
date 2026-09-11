import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DotGrid } from "@/components/dot-grid";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Allison McCormack and Katie Gross, the couple behind Rosebud Yogis in Brooklyn.",
};

export default function AboutPage() {
  return (
    <div className="relative flex min-w-0 flex-1 flex-col pb-8 pt-8">
      <DotGrid className="top-0 right-2 hidden opacity-80 sm:grid" />

      <h1 className="reveal font-display text-4xl font-extrabold text-ink sm:text-5xl">
        About
      </h1>
      <p className="reveal reveal-delay-1 mt-3 max-w-xl text-lg leading-relaxed text-pretty text-ink/75">
        Hello! We&rsquo;re Allison McCormack and Katie Gross &mdash; the couple
        behind Rosebud Yogis. Allison leads the classes; Katie handles
        everything behind the scenes.
      </p>

      <div className="reveal reveal-delay-2 mt-8 overflow-hidden rounded-3xl shadow-[8px_10px_0_rgba(79,122,86,0.12)]">
        <Image
          src="/about-photo.jpg"
          alt="Allison McCormack and Katie Gross smiling on a hike beside a turquoise mountain lake"
          width={1024}
          height={768}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* EDIT ME: the story */}
      <div className="reveal reveal-delay-3 mt-8 flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-pretty text-ink/75">
        <p>
          Allison (M.Ed., RYT&#8209;200) is a certified Special Education
          Teacher and Registered Yoga Teacher with more than a decade of
          experience supporting children with diverse learning needs. That
          background shapes everything about how these classes are run.
        </p>
        <p>
          Katie is currently enrolled in a 200&#8209;hour yoga teacher training
          and has long been passionate about yoga, mindfulness, and working with
          children. She looks after sign&#8209;ups, scheduling, and the rest of
          the behind&#8209;the&#8209;scenes work.
        </p>
        <p>
          A class is thirty minutes of gentle, playful movement out in the park
          &mdash; animal poses, songs, and plenty of wiggling. No experience
          needed, and nobody minds if your little one spends half of it
          watching.
        </p>
        <p>
          Rosebud Yogis is grounded in a simple belief: every child deserves to
          be met exactly where they are, held with compassion, seen for who they
          truly are, and gently guided toward who they&rsquo;re becoming.
        </p>
        <p className="font-display text-lg font-bold text-ink">
          <Link href="/schedule" className="text-purple">
            See upcoming classes
          </Link>
        </p>
      </div>
    </div>
  );
}
